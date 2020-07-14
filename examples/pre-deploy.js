const { TONAddressStringVariant } = require('./../node_modules/ton-client-js/dist/modules/TONContractsModule.js');

const airdrop = require('./../contracts/airdropContract');

const {
  keys,
  ton,
} = require('./utils');


(async () => {
  await ton.setup();

  const contractAddress = (await ton.contracts.createDeployMessage({
    package: airdrop.package,
    constructorParams: {
      _refund_destination: "0:28861a9d4a9c9766e1129f7323e01ba0c98c33d5414c0036b8194282ff7abc5c",
      _addresses: ["0:28861a9d4a9c9766e1129f7323e01ba0c98c33d5414c0036b8194282ff7abc5c"],
      _amounts: [10]
    },
    initParams: {},
    keyPair: keys,
  })).address;
  
  console.log(`Future address of the contract will be: ${contractAddress}`);
  
  // Convert address format
  const { address: convertedAddress } = await ton.contracts.convertAddress({
    address: contractAddress,
    convertTo: TONAddressStringVariant.Base64,
    base64Params: {
      test: false,
      bounce: false,
      url: true,
    },
  });
  
  console.log(`Use this address for wallet: ${convertedAddress}`);
})();
