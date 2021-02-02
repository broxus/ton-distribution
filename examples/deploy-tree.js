const airdrop = require('./../contracts/airdropContract');

const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 257 });

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
    const deployContract = async (nonce, addresses, amounts) => {
      const _amounts = amounts.map((item) => new BigNumber(item).toString());

      return (await ton.contracts.createDeployMessage({
        package: airdrop.package,
        constructorParams: {
          ...config.constructorParams,
          _addresses: addresses,
          _amounts
        },
        initParams: {
          _randomNonce: nonce
        },
        keyPair: config.keys,
      })).address;
    };

    const targetAddresses = [];
    const targetAmounts = [];
    const addressCount = config.constructorParams._addresses.length;

    for (let offset = 0; offset < addressCount;) {
      let subtotal = new BigNumber(0);
      const addresses = [];
      const amounts = [];
      for (let i = 0; i < 99 && (offset + i) < addressCount; ++i) {
        const j = offset + i;

        addresses.push(config.constructorParams._addresses[j]);

        const amount = config.constructorParams._amounts[j];
        amounts.push(amount);
        subtotal = subtotal.plus(amount);
      }

      const target = await deployContract(targetAddresses.length, addresses, amounts);
      const rangeEnd = offset + addresses.length - 1;
      console.log(`Deployed contract for range [${offset}-${rangeEnd}] at: ${target}`);

      targetAddresses.push(target);
      targetAmounts.push(subtotal);

      offset += addresses.length;
    }

    const target = await deployContract(targetAddresses.length, targetAddresses, targetAmounts);
    console.log(`Deployed base contract at: ${target}`);

  } catch (e) {
    console.log(e);
  }

  process.exit(0);
})();
