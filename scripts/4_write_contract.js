const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const account1 = ''
const account2 = ''

const privateKey1 = ''
const wallet = new ethers.Wallet(privateKey1, provider)

const address = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB' //chainlink token contract address

const ERC20_ABI = [ 
 "function balanceOf(address) view returns (uint)",
 //remember to specify view if view only
 "function transfer(address to, uint amount) returns (bool)",
];

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const acc1before = await contract.balanceOf(account1)
    const acc2before = await contract.balanceOf(account2)
    console.log(ethers.utils.formatEther(acc1before))
    console.log(ethers.utils.formatEther(acc2before))

    const contractWithWallet = contract.connect(wallet)
    const tx = await contractWithWallet.transfer(account2, acc1before)

    await tx.wait()
    console.log(tx)

    const acc1after = await contract.balanceOf(account1)
    const acc2after = await contract.balanceOf(account2)
    console.log(ethers.utils.formatEther(acc1after))
    console.log(ethers.utils.formatEther(acc2after))
}

main()

