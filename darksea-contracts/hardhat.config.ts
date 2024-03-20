import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "dotenv/config";

const {
  DEPLOYER_MNEMONIC,
  REDSTONE_TESTNET_RPC_URL,
  REDSTONE_TESTNET_CHAINID,
  ADMIN_PUBLIC_ADDRESS,
} = process.env;

const redstoneTestnet = {
  url: process.env.REDSTONE_TESTNET_RPC_URL,
  accounts: {
    mnemonic: DEPLOYER_MNEMONIC,
  },
  chainId: Number(REDSTONE_TESTNET_CHAINID),
  gasPrice: 50, //wei
};

const config: HardhatUserConfig = {
  networks: {
    // Used when you dont specify a network on command line, like in tests
    hardhat: {},
    localhost: {
      url: "http://localhost:8545/",
      accounts: {
        // Same mnemonic used in the .env.example
        mnemonic:
          "change typical hire slam amateur loan grid fix drama electric seed label",
      },
      chainId: 31337,
    },
    ...(DEPLOYER_MNEMONIC ? { redstoneTestnet } : undefined),
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
