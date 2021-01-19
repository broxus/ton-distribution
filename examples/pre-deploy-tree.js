const { TONAddressStringVariant } = require('./../node_modules/ton-client-js/dist/modules/TONContractsModule.js');

const airdrop = require('./../contracts/airdropContract');

const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 257 });

const {
  ton,
  getConfig,
} = require('./utils');

const config = getConfig(true);

(async () => {
  await ton.setup();

  try {
    const createDeployMessage = async (nonce, addresses, amounts) => {
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

      const target = await createDeployMessage(targetAddresses.length, addresses, amounts);
      const rangeEnd = offset + addresses.length - 1;
      console.log(`Future address of the contract for range [${offset}-${rangeEnd}] will be: ${target}\nAmount: ${subtotal.toString()} nano\n`);

      targetAddresses.push(target);
      targetAmounts.push(subtotal);

      offset += addresses.length;
    }

    const target = await createDeployMessage(targetAddresses.length, targetAddresses, targetAmounts);
    console.log(`Future address of the base contract will be: ${target}`);
  } catch (e) {
    console.error(e);
  }
})();
