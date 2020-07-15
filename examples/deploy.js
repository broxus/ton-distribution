const airdrop = require('./../contracts/airdropContract');

const {
  keys,
  ton,
  constructorParams,
} = require('./utils');


(async () => {
  await ton.setup();

  // Deploy contract
  try {
    const message = (await ton.contracts.deploy({
      package: airdrop.package,
      constructorParams,
      initParams: {},
      keyPair: keys,
    }));
    
    console.log(`Contract deployed at ${message.address}`);
  } catch (e) {
    console.log(e);
  }
  
  process.exit(0);
})();
