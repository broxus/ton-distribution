const { TONAddressStringVariant } = require('./../node_modules/ton-client-js/dist/modules/TONContractsModule.js');

const airdrop = require('./../contracts/airdropContract');

const {
  ton,
  config,
} = require('./utils');


(async () => {
  await ton.setup();

  try {
    const contractAddress = (await ton.contracts.createDeployMessage({
      package: airdrop.package,
      constructorParams: config.constructorParams,
      initParams: {},
      keyPair: config.keys,
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
  } catch (e) {
    console.error(e);
  }
})();
