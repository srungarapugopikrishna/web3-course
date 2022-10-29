const hre = require("hardhat");
const { ethers, BigNumber } = require("ethers");
// const { getProvider, getSigner } = require("../../day2/utils");

async function main() {
  const hardhatSigner = (await hre.ethers.getSigners())[0];

  const myBalance = await hardhatSigner.getBalance();

  const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

  console.log("Sending ETH to: ", toAddress);

  const tx = await hardhatSigner.sendTransaction({
    to: toAddress,
    value: myBalance.div(BigNumber.from(10)),
  });

  console.log("TX SENT!", tx.hash);

  await tx.wait();

  console.log("TX MINED!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//command to excute ths file
//  npx hardhat run scripts/sendETH.js --network localhost
// set the defaulNetwork to localostin hardhat.config.js to runscript like his "node scripts/sendETH.js"
//
