import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    },
    localhost: {
      gas: 2100000,
      gasPrice: 8000000000,
      url: "http://127.0.0.1:8545/",
      accounts: ["0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e", "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"]
    },
    Goerli_test_network: {
      gas: 2100000,
      gasPrice: 8000000000,
      // url: "https://goerli.infura.io/v3/",
      // Alchemy
      url: "https://eth-goerli.g.alchemy.com/v2/GeRIcQ0nWlQWwS3tR0D1xsDfqkjNRBYu",
      chainId: 5,
      accounts: ['0x281b16f968359f02de2c35480eb59ae5e2fb470f3eb3fa281e8d52d29af1fe4a'],
    },
    heco_testnet: {
      url: "https://http-testnet.hecochain.com",
      chainId: 256,
    },
    heco_mainnet: {
      url: "https://http-mainnet.hecochain.com",
      chainId: 128,
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed1.binance.org",
      chainId: 56,
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
