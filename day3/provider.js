// In day1/provider we conncted to ethereum network using infura. Now we are connecting to ethereum using our local network.

import * as dotenv from "dotenv";
dotenv.config();
import { ethers } from "ethers";

const infuraUrl =
  "https://mainnet.infura.io/v3/dbe239153b1e4f1cae2eeff42405d071";
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
console.log("Current block number on Infura:", await provider.getBlockNumber());

//where geth node runs
const localNode = `http://localhost:8545`;
const localProvider = new ethers.providers.JsonRpcProvider(localNode);
console.log(
  "Current block number on Local Node:",
  await localProvider.getBlockNumber()
);

console.log("ens to address", await provider.resolveName("atg.eth"));

// console.log("ens to addresslocal", await localProvider.resolveName("atg.eth"));

const vitalikAddress = await provider.resolveName("vitalik.eth");
console.log("Vitalik address::", vitalikAddress);
const vitalikBalance = await provider.getBalance("vitalik.eth");
console.log("vitalik balance", ethers.utils.formatEther(vitalikBalance));

const vitalikBalanceromAddress = await provider.getBalance(
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
);
console.log(
  "vitalik balance",
  ethers.utils.formatEther(vitalikBalanceromAddress)
);

const vitalikBalanceLocal = await localProvider.getBalance(
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
);

console.log(
  "vitalik balancelocal",
  ethers.utils.formatEther(vitalikBalanceLocal)
);

// let sanfordBalance = await provider.getBalance("sanfordstout.eth");
// let sanfordBalanceLocal = await localProvider.getBalance("sanfordstout.eth");

// sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));
// sanfordBalanceLocal = sanfordBalanceLocal.add(ethers.utils.parseEther("5000"));

// console.log("sanford balance", ethers.utils.formatEther(sanfordBalance));

// console.log("<========================================================>");

// console.log(
//   "vitalik balance Local::",
//   ethers.utils.formatEther(vitalikBalanceLocal)
// );

// console.log(
//   "sanford balance Local::",
//   ethers.utils.formatEther(sanfordBalanceLocal)
// );
