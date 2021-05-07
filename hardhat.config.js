require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  networks: {
    hardhat: {},
    testnet: {
      url: "https://api.s0.b.hmny.io",
      chainId: 1666700000,
      gasPrice: 1000000000,
      accounts: [process.env.PRIVATE_KEY],
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: "https://api.s0.t.hmny.io",
      chainId: 1666600000,
      gasPrice: 1000000000,
      accounts: [process.env.PRIVATE_KEY],
      allowUnlimitedContractSize: true,
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 200000,
  },
};
