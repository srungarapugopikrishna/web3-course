const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const signer = (await hre.ethers.getSigners())[0];

  const myBalance = await signer.getBalance();

  console.log("My balance", ethers.utils.formatEther(myBalance));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
