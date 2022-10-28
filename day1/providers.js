import * as dotenv from "dotenv";
dotenv.config();
import { ethers } from "ethers";

const infuraUrl =
  "https://mainnet.infura.io/v3/dbe239153b1e4f1cae2eeff42405d071";
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// console.log('provider----->>>>>');
// console.log(provider);
// console.log('<<<<<------provider');
console.log("Current block number", await provider.getBlockNumber());

console.log("ens to address", await provider.resolveName("atg.eth"));

console.log(
  "address to ens",
  await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3")
);

const vitalikBalance = await provider.getBalance("vitalik.eth");

let sanfordBalance = await provider.getBalance("sanfordstout.eth");

sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));

console.log("vitalik balance", ethers.utils.formatEther(vitalikBalance));

console.log("sanford balance", ethers.utils.formatEther(sanfordBalance));

// console.log(
//   "1.5 eth is ",
//   ethers.utils.formatEther(ethers.utils.parseEther("1.5"))
// );
