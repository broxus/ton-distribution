const airdrop = require('./../contracts/airdropContract');

const {
  ton,
  getConfig,
} = require('./utils');

const config = getConfig();
// console.log(config.constructorParams);

(async () => {
  await ton.setup();

  // Deploy contract
  try {
    const message = (await ton.contracts.deploy({
      package: airdrop.package,
      constructorParams: config.constructorParams,
      initParams: {
        _randomNonce: 0
      },
      keyPair: config.keys,
    }));

    console.log(`Contract deployed at ${message.address}`);
  } catch (e) {
    console.log(e);
  }

  process.exit(0);
})();
