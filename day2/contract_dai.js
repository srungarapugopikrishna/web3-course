import { ethers } from "ethers";
import { getProvider } from "./utils.js";
import daiAbi from "./abi/daiAbi.js";

const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const mainnetProvider = getProvider(true);

const DAY2_ADDRESS = "0xAe1F5f1e934997D72f2bAdcb1F5958dbF2356459";

const daiContract = new ethers.Contract(daiAddress, daiAbi, mainnetProvider);

const daiBalance = await daiContract.balanceOf(DAY2_ADDRESS);

console.log("Dai Balance:::", ethers.utils.formatEther(daiBalance));
