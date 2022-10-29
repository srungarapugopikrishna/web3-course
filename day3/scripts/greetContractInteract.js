const hre = require("hardhat");
const { ethers, BigNumber } = require("ethers");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const greeter = await hre.ethers.getContractAt("Greeter", contractAddress);
  console.log("Initial greeting:::", await greeter.greet());

  console.log("sending greeting....");
  const setTx = await greeter.setGreeting("Modifying to new Greet message");

  console.log("setTx sent!");

  await setTx.wait();

  console.log("setTx mined!");

  console.log("Updated greeting:::", await greeter.greet());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//command to excute ths file
//  npx hardhat run scripts/sendETH.js --network localhost
// set the defaulNetwork to localostin hardhat.config.js to runscript like his "node scripts/sendETH.js"
//
