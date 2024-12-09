// import { getTokensBalance } from '@mycrypto/eth-scan';

// window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
//     alert("Invalid mnemonic phrase provided!");
//     return false;
// }

// const phrase =
// const phrase = "plastic topple way wire scene gown dumb quote total once avocado capable";
// const phrase = "federal train gather tumble service amount address need tail crunch better baby";
// const wallet = new Wallet(phrase, `m/44'/60'/0'/0/1`)

// var wall = ethers.Wallet.fromMnemonic(phrase)

// const address = wall.address;
// const ETHbal = await web3.eth.getBalance(address);
// const ETH_balance = ethers.utils.formatEther(ETHbal)
// console.log("ETH ETH_balance", ETH_balance);
// const ETH_data = {
//     currency_name: "Ethereum",
//     Symbol: "ETH",
//     balance: ETH_balance
// }

// let coin_data;
// let data = []
// data.push(ETH_data)

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer ory_at_NvHepF0TGJ-ZBOyOofkOSimGhOYQ8o-CNbgGPE9fxRw.FTnfPDUD0Xld8YqviRifsgoEd3qFr3LGQylZgt1grx8"
);

// const raw = JSON.stringify({
// "query": `query MyQuery {\n  EVM(dataset: combined, network: bsc) {\n    BalanceUpdates(\n      where: {BalanceUpdate: {Address: {is: \"${address}\"}}}\n    ) {\n      Currency {\n        Name\n        SmartContract\n        Symbol\n      }\n      balance: sum(of: BalanceUpdate_Amount)\n    }\n  }\n}\n`,
// "variables": "{}"
// });

// const requestOptions = {
// method: "POST",
// headers: myHeaders,
// body: raw,
// redirect: "follow"
// };

// try {
//     const response = await fetch("https://streaming.bitquery.io/graphql", requestOptions);
//     const result = await response.text();
//     if(result) {
//         let res = JSON.parse(result)
//         coin_data = res.data.EVM.BalanceUpdates;

//         coin_data.forEach(element => {
//             let dt= {}
//             dt.currency_name = element.Currency.Name;
//             dt.Symbol = element.Currency.Symbol;
//             dt.balance = element.balance;
//             data.push(dt)
//         });

//         console.log(coin_data);
//         console.log("Data:", data)
//     }
// } catch (error) {
//     console.log('error', error)
// }

// ADDING ETH
// const ETHbal = await web3.eth.getBalance(address);
// const ETH_balance = ethers.utils.formatEther(ETHbal)
// console.log("ETH ETH_balance", ETH_balance);
// const ETH_data = {
//     currency_name: "Ethereum",
//     Symbol: "ETH",
//     balance: ETH_balance
// }
// data.push(ETH_data)
