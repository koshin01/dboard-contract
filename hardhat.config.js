require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.YOUR_ALCHEMY_API_URL,
      accounts: [process.env.YOUR_PRIVATE_SEPOLIA_ACCOUNT_KEY]
    }
  }
};
