const airdrop = require('./../contracts/airdropContract');

const {
  keys,
  ton,
} = require('./utils');


(async () => {
  await ton.setup();

  // Deploy contract
  try {
    const message = (await ton.contracts.deploy({
      package: airdrop.package,
      constructorParams: {
        _refund_destination: "0:50600a342eeae4c566e51447396b1871df3e9a16aab90009d85a16bf99408a69",
        _addresses: ["0:50600a342eeae4c566e51447396b1871df3e9a16aab90009d85a16bf99408a69"],
        _amounts: [112233]
      },
      keyPair: keys,
    }));
    
    console.log(`Contract deployed at ${message.address}`);
  } catch (e) {
    console.log(e);
  }
  
  process.exit(0);
})();
