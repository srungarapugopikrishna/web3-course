import { BigNumber, ethers } from "ethers";
import * as dotenv from 'dotenv' 
dotenv.config();


const message = "Hello this is message";
const privateKey = process.env.MY_WALLET_PRIVATE_KEY_ACC3;

function createRandomWallet(){
    const wallet = ethers.Wallet.createRandom();
    console.log("address:", wallet.address);
    console.log("preivate key:", wallet.privateKey);
    console.log("mnemonic:", wallet.mnemonic.phrase);
    return wallet;
}

function generatenewAccounts(){
    const wallet = createRandomWallet();
    let path, myWallet;
    for (let i=0; i<10; i++){
        path = `m/44'/60'/0'/0/${i}`;
        myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
        console.log("address::", i, myWallet.address);
        console.log("private key::", i, myWallet.privateKey);
    }
}

function getGoerliInfuraProvider(){
    const infuraUrlGoerli = "https://goerli.infura.io/v3/dbe239153b1e4f1cae2eeff42405d071";
    const provider = new ethers.providers.JsonRpcProvider(infuraUrlGoerli);
    // console.log("provider::", provider);
    return provider;
}

function extractWalletAddressFromPrivateKey(){

    const wallet = new ethers.Wallet(privateKey);
    console.log("My Wallet Address(from private key)", wallet.address)
    return wallet;
}

async function signAMessageAndGetSignersAddress(message){
    const wallet = extractWalletAddressFromPrivateKey();
    const signature = await wallet.signMessage(message);
    console.log("Signed Message::", signature);

    const signerAddress = ethers.utils.verifyMessage(message, signature);
    console.log("signerAddress::", signerAddress);
    return signature;
}

async function getGoerliBalanceOfMyWallet(){
    const privateKey = process.env.MY_WALLET_PRIVATE_KEY_ACC1;
    const provider = getGoerliInfuraProvider();
    const signer = new ethers.Wallet(privateKey, provider);
    // const signer = new ethers.Wallet(privateKey)
    // await signer.connect(provider);
    const goerliBalance = await provider.getBalance(signer.address)
    // const goerliBalance = await signer.getBalance()
    console.log("Goerli Balance::::", ethers.utils.formatEther(goerliBalance));
    return goerliBalance;
}



async function sendTransaction(){
    const privateKey = process.env.MY_WALLET_PRIVATE_KEY_ACC1;
    const provider = getGoerliInfuraProvider();
    const signer = new ethers.Wallet(privateKey, provider);
    const sendToAddress = "0x93cD869B0431Ddb9A9937dCdcf90A0639342FEDE"
    const myBalance = await getGoerliBalanceOfMyWallet()
    
    
    console.log("Sending ETH to: ", sendToAddress)

    const tx = await signer.sendTransaction({
        to: sendToAddress,
        value: myBalance.div(BigNumber.from(100)),
    });

    console.log("TX SENT!", tx)

    
}

// signAMessageAndGetSignersAddress(message)
// getGoerliBalanceOfMyWallet()
sendTransaction()



