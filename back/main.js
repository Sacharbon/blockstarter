const xrpl = require("xrpl");
const cc = require('five-bells-condition');
const crypto = require('crypto');

function get_time_since_2000_in_seconds(nb_day) {
  // nb_day nombre de jours avant fermeture
  const rippleOffset = 946684800
  const endDate = nb_day*24*60*60;
  const differenceInSeconds = Math.floor(Date.now() / 1000) + endDate - rippleOffset;

  return differenceInSeconds;
}

async function create_two_wallet()
{
  let client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
  let faucetHost = null
  await client.connect();
  const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet
  client.disconnect();
  client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
  await client.connect();
  const your_wallet = (await client.fundWallet(null, { faucetHost })).wallet
  client.disconnect();

  return { your_wallet, my_wallet };
}

// async function create_escrow(timeBeforeCancel, wallets, paymentChannelAdress)
// {
//   let channelClient = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
//   const preimageData = crypto.randomBytes(32)
//   const fulfillment = new cc.PreimageSha256()

//   fulfillment.setPreimage(preimageData)
//   const condition = fulfillment.getConditionBinary().toString('hex').toUpperCase()
//   const fulfillment_hex = fulfillment.serializeBinary().toString('hex').toUpperCase()

//   const prepared = {
//     Account: ((await wallets).my_wallet.classicAddress),
//     TransactionType: "PaymentChannelCreate",
//     Amount: xrpl.xrpToDrops(amount),
//     Destination: ((await wallets).your_wallet.classicAddress),
//     SettleDelay: 999999,
//     PublicKey: ((await wallets).my_wallet.publicKey),
//     CancelAfter: timeBeforeCancel,
//   }
//   console.log(prepared)
//   console.log(((await wallets).my_wallet))
//   const result = await channelClient.submitAndWait(prepared, {
//     autofill: true,
//     wallet: ((await wallets).my_wallet),
//   }); 
// }

async function create_paymentChannel(timeBeforeCancel, wallets, amount)
{
  let channelClient = new xrpl.Client("wss://s.altnet.rippletest.net:51233");

  // try {
    const prepared = {
      "Account": ((await wallets).my_wallet.classicAddress),
      "TransactionType": "PaymentChannelCreate",
      "Amount": xrpl.xrpToDrops(amount),
      "Destination": ((await wallets).your_wallet.classicAddress),
      "SettleDelay": 999999,
      "PublicKey": ((await wallets).my_wallet.publicKey),
      "CancelAfter": timeBeforeCancel,
    }
    console.log(prepared)
    console.log(((await wallets).my_wallet))
    const result = await channelClient.submitAndWait(prepared, {
      autofill: true,
      wallet: ((await wallets).my_wallet),
    }); 
    // console.log(result)
    // } catch {
      //   console.log("error create_paymentChannel() function")
      // }
      
    channelClient.disconnect();
    return result.result.hash
}

async function main() {
  let timeBeforeCancel = get_time_since_2000_in_seconds('05-14-2024')
  let wallets = create_two_wallet()
  let payementChannelAdress = create_paymentChannel(timeBeforeCancel, wallets, 10)
  
  // create_escrow(timeBeforeCancel, wallets, payementChannelAdress)

  // step 2 "Use Payment Channels"
  // const truc = await client.request({
  //   "command": "account_channels",
  //   "account": my_wallet.address,
  //   "destination_account": your_wallet.address,
  // })
  // console.log(truc);
  // console.log(truc.result.channels)
  // const public = truc.result.channels[0].public_key
  // const channel = truc.result.channels[0].channel_id
  // console.log(public)

}
main();