const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { ethers } = require('ethers');
const { execSync } = require('child_process');
const { Wallet } = require('ethers');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ethereum RPC and Private Key
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
let wallet = Wallet.createRandom();
wallet = wallet.connect(provider);

// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
app.post('/deploy', async (req, res) => {
    try {
        const solidityCode = req.body.code;

        // Write Solidity code to a temp file
        fs.writeFileSync('./contracts/Temp.sol', solidityCode);
        const myBalance = await provider.getBalance;
        console.log(myBalance);
        // Compile using Hardhat
        execSync(`npx hardhat clean`);
        execSync(`npx hardhat compile`, { stdio: 'inherit' });

        // Get compiled contract
        const compiledContract = require('./artifacts/contracts/Temp.sol/Temp.json');

        // Deploy contract
        const factory = new ethers.ContractFactory(compiledContract.abi, compiledContract.bytecode, wallet);
        const contract = await factory.deploy();
        await contract.waitForDeployment();

        // Return contract details
        res.json({ address: await contract.getAddress(), abi: compiledContract.abi });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));
