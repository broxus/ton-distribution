const airdrop = require('./../contracts/airdropContract');

const {
  keys,
  ton,
} = require('./utils');


(async () => {
  await ton.setup();
  
  const contract = new airdrop(
    ton,
    '0:31700b76d72bc4285d013cc767401942f79508beaa0cf91c2ef41e846e627216',
    keys,
  );
  
  try {
    const msg = await contract.distribute();
    console.log(msg);
  } catch (e) {
    console.log(e);
  }
})();
