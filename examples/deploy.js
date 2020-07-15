const airdrop = require('./../contracts/airdropContract');

const {
  ton,
  config,
} = require('./utils');


(async () => {
  await ton.setup();

  // Deploy contract
  try {
    const message = (await ton.contracts.deploy({
      package: airdrop.package,
      constructorParams: config.constructorParams,
      initParams: {},
      keyPair: config.keys,
    }));
    
    console.log(`Contract deployed at ${message.address}`);
  } catch (e) {
    console.log(e);
  }
  
  process.exit(0);
})();
