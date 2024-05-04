const xrpl = require("xrpl");

async function connectWallet(seed, net) {
    results = "Connecting to XRPL."
    const standby_wallet = xrpl.Wallet.fromSeed(String(seed))
    const client = new xrpl.Client(net)
    await client.connect()
    results += '\nAccount Connected. Minting NFT.'
    console.log(results)
    return [standby_wallet, client]
}

async function mintNFT(wallet, client, uri, flags, issuer, transferfee, tokenTaxon) {
    const transactionJson = {
        TransactionType: "NFTokenMint",
        Account: wallet.address,
        Flags: flags,
        TransferFee: transferfee,
        NFTokenTaxon: tokenTaxon,
        URI: xrpl.convertStringToHex(uri),
    }
    if (issuer) {
        transactionJson.Issuer = issuer
    }
    const tx = await client.submitAndWait(transactionJson, { wallet: wallet} )
    results = '\nTransaction result: '+ tx.result.meta.TransactionResult
    console.log(results)
    return tx
}

async function getNfts(wallet, client) {
    const nfts = await client.request({
        method: "account_nfts",
        account: wallet.classicAddress
    })
    console.log('NFTs: ' + JSON.stringify(nfts, null, 2))
    return nfts
}

const seed = process.env.SEED
const net = process.env.NET
console.log('Seed: ' + seed, 'Net: ' + net)
const uri = "https://xahau-test.net/nft/1"
const flags = 0
const transferfee = 0
const tokenTaxon = 1

async function main() {
    const [wallet, client] = await connectWallet(seed, net)
    await mintNFT(wallet, client, uri, flags, "",transferfee, tokenTaxon)
    const nfts = await getNfts(wallet, client)
    client.disconnect()
}

main()
