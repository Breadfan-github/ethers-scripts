const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/33094f1fe0654244b940cc178603f382`)

const account1 = ''
const account2 = ''

const privateKey1 = ''
const wallet = new ethers.Wallet(privateKey1, provider)
// new wallet instance (wallet just like metamask, with your priv key and a provider)

const main = async () => {
    //show account balances before transfer
    const acc1before = await provider.getBalance(account1)
    const acc2before = await provider.getBalance(account2)
    console.log(ethers.utils.formatEther(acc1before))
    console.log(ethers.utils.formatEther(acc2before))

    //send ether
   const tx = await wallet.sendTransaction({to: account2 , value: ethers.utils.parseEther('0.025')})

  //wait transaction to be mined
   await tx.wait()
   //fetch transaction
   console.log(tx)

   //show account balances after transfer
   const acc1after = await provider.getBalance(account1)
   const acc2after = await provider.getBalance(account2)
   console.log(ethers.utils.formatEther(acc1after))
    console.log(ethers.utils.formatEther(acc2after))

    
}

main()