import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import * as dotenv from 'dotenv' 
dotenv.config();

// const mainnetProvider = getProvider(true);

const goerliProvider = getProvider();
const goerliSigner = getSigner();

const myBalance = await goerliSigner.getBalance();

console.log("Balance:::", myBalance, " in ETH::", ethers.utils.formatEther(myBalance), "Sending balance :", ethers.utils.formatEther(myBalance.div(BigNumber.from(100))));

// process.exit();

const sendToAddress = process.env.DAY2_ADDRESS;

console.log("Sending ETH to: ", sendToAddress);

const tx = await goerliSigner.sendTransaction({
    to: sendToAddress,
    value: myBalance.div(BigNumber.from(100)),
});

console.log("TX SENT!", tx.hash);

await tx.wait();

console.log("TX MINED!");

