const airdrop = require('./../contracts/airdropContract');

const {
  getConfig,
  ton,
  checkContractAddress,
} = require('./utils');

const config = getConfig();

checkContractAddress(config.contractAddress);


(async () => {
  await ton.setup();
  
  const contract = new airdrop(
    ton,
    config.contractAddress,
    config.keys,
  );
  
  try {
    await contract.distribute();
    console.log('Called successfully');
  } catch (e) {
    console.log(e);
  }
  
  process.exit(0);
})();
