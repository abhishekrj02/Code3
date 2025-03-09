require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { execSync } = require('child_process');
const { ethers } = require('ethers');

const app = express();
app.use(cors());
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Function to compile Solidity code
const compileContract = (solidityCode) => {
    fs.writeFileSync('./contracts/Temp.sol', solidityCode);

    try {
        execSync(`npx hardhat clean`);
        execSync(`npx hardhat compile`, { stdio: 'pipe' });
    } catch (compileError) {
        console.error("Compilation error detected.");
        const errorOutput = compileError.stderr.toString();
        console.log("Raw Error Output:", errorOutput);

        const errorMatch = errorOutput.match(/Error: (.*?)\n.*?Temp\.sol:(\d+):/s);
        if (errorMatch) {
            return {
                success: false,
                error: errorMatch[1].trim(),
                line: parseInt(errorMatch[2], 10)
            };
        }

        return {
            success: false,
            error: "Compilation failed. Check Solidity syntax.",
            details: errorOutput
        };
    }

    const contractMatch = solidityCode.match(/contract\s+(\w+)/);
    if (!contractMatch) {
        return {
            success: false,
            error: "No contract definition found in Solidity code."
        };
    }

    const contractName = contractMatch[1];
    console.log("Detected contract name:", contractName);

    const oldPath = `./artifacts/contracts/Temp.sol/${contractName}.json`;
    const newPath = `./artifacts/contracts/Temp.sol/Temp.json`;

    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${contractName}.json to Temp.json`);
    } else {
        return {
            success: false,
            error: `Compiled contract JSON (${contractName}.json) not found.`,
        };
    }

    return { success: true, contractName };
};

// Function to execute test cases on a contract
const executeTestCases = async (contract, testCases) => {
    const results = [];

    for (const testCase of testCases) {
        const { input, expectedOutput } = testCase;

        try {
            const methodCall = eval(`contract.${input}`);
            const result = await methodCall;
            results.push({
                input,
                expectedOutput,
                actualOutput: result.toString(),
                success: result.toString() === expectedOutput
            });
        } catch (error) {
            results.push({
                input,
                expectedOutput,
                actualOutput: error.message,
                success: false
            });
        }
    }

    return results;
};

app.post('/compile', async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: "No Solidity code provided" });
    }

    console.log("Received Solidity code...");
    const result = compileContract(code);

    if (!result.success) {
        return res.status(400).json(result);
    } else {
        return res.status(200).json(result);
    }
});

// Route for submitting Solidity contract and verifying test cases
app.post('/submit', async (req, res) => {
    const { code, testCases } = req.body;
    if (!code) {
        return res.status(400).json({ error: "No Solidity code provided" });
    }

    console.log("Received Solidity code...");
    const result = compileContract(code);

    if (!result.success) {
        return res.status(400).json(result);
    }

    try {
        const compiledContract = require('./artifacts/contracts/Temp.sol/Temp.json');

        console.log("Deploying from account:", wallet.address);

        const factory = new ethers.ContractFactory(compiledContract.abi, compiledContract.bytecode, wallet);
        const contract = await factory.deploy();

        console.log("Waiting for contract deployment...");
        await contract.waitForDeployment();

        const contractAddress = await contract.getAddress();
        console.log("Contract deployed at:", contractAddress);

        const testResults = await executeTestCases(contract, testCases);

        res.json({
            success: true,
            address: contractAddress,
            abi: compiledContract.abi,
            testResults
        });

    } catch (error) {
        console.error("Deployment error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));

