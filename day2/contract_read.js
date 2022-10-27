import { ethers } from "ethers";
import { getProvider } from "./utils.js";
import nftAbi from "./abi/nftAbi.js";

const nftAddress = "0x27124948dcc9EbF3113681898FF217d3E4f56900";
const goerliProvider = getProvider();

const nftContract = new ethers.Contract(nftAddress, nftAbi, goerliProvider);

const WETH = await nftContract.WETH();

console.log("nftContract WETH address:::", WETH);
