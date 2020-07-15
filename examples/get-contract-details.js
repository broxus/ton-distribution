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

  // Contract balance
  const { value0: contract_balance } = await contract.get_current_balanceLocal();
  console.log(`Contract balance: ${parseInt(contract_balance, 16)}`);
  
  // Refund address
  const { value0: refund_address } = await contract.get_refund_destinationLocal();
  console.log(`Refund address: ${refund_address}`);
  
  // Refund lock end
  const { value0: refund_lock_end } = await contract.get_refund_lock_end_timestampLocal();
  const refund_lock_end_date = new Date(parseInt(refund_lock_end, 16) * 1000);
  console.log(`Refund lock ends at: ${refund_lock_end_date}`);
  
  // Get list of receivers, corresponded amounts and distribution status
  const { value0: addresses } = await contract.get_addressesLocal();
  const { value0: amounts } = await contract.get_amountsLocal();

  const distributedStatus = await Promise
    .all([...Array(addresses.length).keys()]
    .map(async (address_index) => {
      const {
        value0: distributed_status
      } = await contract.get_distributed_statusLocal({ i: address_index });
  
      return distributed_status;
    }));
  
  console.log('List of receivers and amounts with distribution status:');
  addresses.map((address, address_index) => {
    console.log(distributedStatus[address_index], address, parseInt(amounts[address_index], 16));
  });
  
  process.exit(0);
})();
