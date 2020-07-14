const fs = require('fs');

const {
  ton,
} = require('./utils');


(async () => {
  await ton.setup();

  const keys = await ton.crypto.ed25519Keypair();
  
  console.log(`New keys written in the keys.json`);
  console.log(keys);
  
  fs.writeFileSync('keys.json', JSON.stringify(keys));
})();
