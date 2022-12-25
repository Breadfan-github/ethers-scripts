const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const currentBlock = await provider.getBlockNumber()
    console.log(`current block: ${currentBlock}`)

    const blockInfo = await provider.getBlock(currentBlock)
    console.log(blockInfo)

   const {transactions} = await provider.getBlockWithTransactions(currentBlock)
   console.log(transactions[1])

   }

main()