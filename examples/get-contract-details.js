const airdrop = require('./../contracts/airdropContract');

const {
  getConfig,
  ton,
  checkContractAddress,
} = require('./utils');


const config = getConfig(false);

checkContractAddress(config.contractAddress);


(async () => {
  await ton.setup();
  
  const contract = new airdrop(
    ton,
    config.contractAddress,
    config.keys,
  );

  // Get distributed status
  const { value0: distributed_status } = await contract.get_distributed_statusLocal();
  console.log(`Distributed status: ${distributed_status}`);
  
  // Contract balance
  const { value0: contract_balance } = await contract.get_current_balanceLocal();
  console.log(`Contract balance: ${parseInt(contract_balance, 16)}`);
  
  // Required amount
  const { value0: required_amount } = await contract.get_required_amountLocal();
  console.log(`Required amount for distribution: ${parseInt(required_amount, 16)}`);
  
  const balance_status_string = parseInt(contract_balance, 16) > parseInt(required_amount, 16) ? 'Sufficient' : 'Unsufficient';
  
  console.log(`\n${balance_status_string} balance\n`);
  
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
  
  
  console.log('List of receivers and amounts:');
  addresses.map((address, address_index) => {
    console.log(address_index, address, parseInt(amounts[address_index], 16));
  });
  
  process.exit(0);
})();
