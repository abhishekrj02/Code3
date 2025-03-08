require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths: {
    sources: "./contracts", // Solidity files location
    artifacts: "./artifacts", // Compiled files location
  },
  networks: {
    hardhat: {},  // Local Hardhat Network
    localhost: {
        url: "http://127.0.0.1:8545/",
    },
},
};
