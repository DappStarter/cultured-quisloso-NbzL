require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind concert harvest opinion bridge travel'; 
let testAccounts = [
"0xb3c125c8ec16801dce7d0733980726f17ef439bf117584547ae5edd5dd54eeca",
"0x716bbcb9d2ee8f9c81d230d073c061b7447e2fffeaefed3cf98831321947e019",
"0x0aedd6300709c89674d445826ed3dcfd7df8254bb488d0a14496d51cfa924048",
"0x4e8737c9107b5902a45ac960ca7c31915ddda4ef1d9a4fe731cc0e180138f414",
"0xc890ff255240e040595b947d03167e87b8711c3faa5829f03e9f1e77baa0f870",
"0x8a38fb6f51134291d022e3975ed90b9a4b75f8b7a092b63ad777652dee14ec7b",
"0x298762412dfaa632424660009d97329b6032c168d1aba9b759246289d0a1fa6e",
"0xda55fa18a0deaff615c8856cfa83bc7aca08e2ca0be2a8ce6b06936657534332",
"0x1a910e1d54615d509bbdd269e15ca57e6e13e1015f9409149978c9943c9e637a",
"0x3f300d99b0acaa452a9be67b25e8ebc8e7e092c62270c5e63f97872b9e3bc7b5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

