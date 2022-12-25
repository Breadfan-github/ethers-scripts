const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x6b175474e89094c44da98b954eedeac495271d0f'

const ERC20_ABI =[
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed src, address indexed dst, uint wad)"
]

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const currentBlock = await provider.getBlockNumber()

    console.log(current)
        
    
    const transferEvent = await contract.queryFilter('Transfer', currentBlock - 5, currentBlock)
    console.log(transferEvent)

}

main()