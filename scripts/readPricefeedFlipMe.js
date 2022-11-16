const Web3 = require('web3')

const rpcURL = "https://liberty20.shardeum.org/"
const web3 = new Web3(rpcURL)

const simpleStorageAddress = '0xf7D35599fA6a7e669503a4b6842924565160fB36'
const simpleStorageABI = [{"inputs":[],"name":"btcUsdt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ethUsdt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipMe","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sValueFeed","outputs":[{"internalType":"contractISupraSValueFeed","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

const simpleStorageDeployed = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress)

flipMeMulticallRead();

async function flipMeMulticallRead() {

    const chainIdConnected = await web3.eth.getChainId();
    console.log("chainIdConnected: "+ chainIdConnected)

    const flipMe = await simpleStorageDeployed.methods.flipMe().call()
    console.log("flipMe: "+ flipMe)

}
