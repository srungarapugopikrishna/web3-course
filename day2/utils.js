import { ethers } from "ethers";
import * as dotenv from 'dotenv' 
dotenv.config();

const getProvider = (mainnet = false) => {
    const provider = mainnet
    ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
    : `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
    return new ethers.providers.JsonRpcProvider(provider);
}

const provider = getProvider(true);

const generateNewWallet = () =>{
    const wallet = ethers.Wallet.createRandom();
    console.log("address:", wallet.address);
    console.log("preivate key:", wallet.privateKey);
    console.log("mnemonic:", wallet.mnemonic.phrase);
}

generateNewWallet()