# Ethereum Smart Contract Deployment API

This is a Node.js Express server that allows users to deploy Solidity smart contracts dynamically. It compiles Solidity code using Hardhat and deploys it to an Ethereum-compatible blockchain.

## Features

- Accepts Solidity smart contract code via API request.

- Uses Hardhat to compile the Solidity contract.

- Deploys the compiled contract to the blockchain.

- Returns the contract address and ABI after deployment.

## Prerequisites

Ensure you have the following installed:

- Node.js

- Hardhat

- An Ethereum-compatible blockchain (e.g., Infura, Alchemy, or a local node)

- A funded Ethereum account for contract deployment

## Installation

- Clone the repository:
```
git clone <repository-url>
cd <repository-name>
```

- Install dependencies:
```
npm install
```

- Set up environment variables: Create a .env file in the root directory and add:
```
RPC_URL=<Your_RPC_URL>
PRIVATE_KEY=<Your_Private_Key>
```

## Usage

- Start the Server

- node server.js

- The server will run on http://localhost:3001.

## Deploy a Smart Contract

- Send a POST request to http://localhost:3001/deploy with the Solidity code in the request body.

- Example Request (Using cURL):
```
curl -X POST http://localhost:3001/deploy \
-H "Content-Type: application/json" \
-d '{
  "code": "pragma solidity ^0.8.0; contract Test { ... }",
  "testCases": [
    { "input": "5", "expectedOutput": "25" },
    { "input": "10", "expectedOutput": "100" }
  ]
}'
```


## Response:
```
{
  "address": "0x1234567890abcdef...",
  "abi": [ ... ]
}
```

## Notes

- The server dynamically generates a Solidity file and compiles it using Hardhat.

- Ensure your Ethereum wallet has enough balance to deploy contracts.

- Hardhat artifacts are required for the contract compilation.