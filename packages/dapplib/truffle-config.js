require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name renew saddle proud grace merry flock genius'; 
let testAccounts = [
"0xd32df53a024476211dfecf677050a3d3d67a1d29c6ca0c2e7114f49ce99fc8b7",
"0x7b74a41521d614c6b580b305a0b76d70c22ea9840f1f3e9964e6edfd78c0e914",
"0x7968ebe68c3067d3a8e7763e2352a6c5e9c4c5f9212d0b4d5b406543963eb590",
"0x853683bf190133d1c390d8d831ce9a512e544935da58db1544cde0779ff145c1",
"0xa28d15c3816fa6b8f39db096e0af5bb633031f8c99ea186bff4e68a54ebfb6a0",
"0xbb214a71108c999ffe6c2261d55e8056437ebd6b23df7c3617428762178b4b4e",
"0xc56cc7d722539b604e0a848e61349a41ab46530b591add27221836c64ca2e8c9",
"0xed5909ec9094e676b1803c9ae1ef630ea6b3b80db0f13ad5bdc947dea8e22ae6",
"0xc0a5a4448157ea741b918ec421d767711b4cadcd4bd40cdd2e0dd02f766d80b1",
"0x6852ae1d07f1e4ec444770704ded9583c673747272970038d2099ad6d9f22ac0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


