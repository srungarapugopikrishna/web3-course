import { ethers } from "ethers";
import * as dotenv from 'dotenv' 
dotenv.config();

const isMainnet = true
const getProvider = (mainnet = false) => {
    const provider = mainnet
    ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
    : `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
    return new ethers.providers.JsonRpcProvider(provider);
}

// const provider = getProvider(isMainnet);

const generateNewWallet = () =>{
    const wallet = ethers.Wallet.createRandom();
    console.log("address:", wallet.address);
    console.log("private key:", wallet.privateKey);
    console.log("mnemonic:", wallet.mnemonic.phrase);
}

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);
    return new ethers.Wallet(process.env.DAY1_PRIVATE_KEY, provider);

}

const signer = getSigner();
// console.log("signer", await signer.getAddress());

// generateNewWallet()

export { getProvider, getSigner, generateNewWallet }
