const airdrop = require('./../contracts/airdropContract');

const {
  keys,
  ton,
  getContractAddressByArgs,
} = require('./utils');


(async () => {
  await ton.setup();
  
  const contractAddress = getContractAddressByArgs(process.argv);
  
  const contract = new airdrop(
    ton,
    contractAddress,
    keys,
  );
  
  try {
    await contract.refund({
      amount: 1000,
    });

    console.log('Called successfully');
  } catch (e) {
    console.log(e);
  }
  
  process.exit(0);
})();