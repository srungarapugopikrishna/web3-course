const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const localProviderUrl = "http://127.0.0.1:8545/";
  const localProvider = new ethers.providers.JsonRpcProvider(localProviderUrl);
  console.log(
    "Current block number on Local Node:",
    await localProvider.getBlockNumber()
  );
  const account1Address = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const account1Balance = await localProvider.getBalance(account1Address);
  console.log("account 1 Balance::", ethers.utils.formatEther(account1Balance));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
