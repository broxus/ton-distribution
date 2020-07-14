const airdrop = require('./../contracts/airdropContract');

const {
  keys,
  ton,
  getContractAddressByArgs,
} = require('./utils');


function * zip(arr1, arr2, i = 0) {
  while(arr1[i]) yield [ arr1[i], arr2[i++] ];
}


(async () => {
  await ton.setup();
  
  const contractAddress = getContractAddressByArgs(process.argv);
  
  const contract = new airdrop(
    ton,
    contractAddress,
    keys,
  );

  // Refund address
  const { value0: refund_address } = await contract.get_refund_destinationLocal();
  console.log('Refund address:');
  console.log(refund_address);
  
  
  const { value0: addresses } = await contract.get_addressesLocal();
  const { value0: amounts } = await contract.get_amountsLocal();
  
  console.log('List of receivers and amounts:');
  for (let [address, amount] of [...zip(addresses, amounts)]) {
    console.log(address, parseInt(amount, 16));
  }
  
  process.exit(0);
})();
