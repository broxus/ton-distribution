const { TONClient } = require('ton-client-node-js');
const fs = require('fs');

const ton = new TONClient();

ton.config.setData({
  servers: ['https://main.ton.dev'],
  waitForTimeout: 10000,
});


const keys = JSON.parse(fs.readFileSync('keys.json'));

const getContractAddressByArgs = (argv) => {
  if (argv.length !== 3) {
    throw new Error('Wrong command, you should specify contract address');
  }
  
  return argv[2];
};


const REFUND_DESTINATION = '0:28861a9d4a9c9766e1129f7323e01ba0c98c33d5414c0036b8194282ff7abc5c';
const ADDRESSES = ["0:28861a9d4a9c9766e1129f7323e01ba0c98c33d5414c0036b8194282ff7abc5c"];
const AMOUNTS = [10];
const REFUND_LOCK_DURATION_IN_SECONDS = 1;


const constructorParams = {
  _refund_destination: REFUND_DESTINATION,
  _addresses: ADDRESSES,
  _amounts: AMOUNTS,
  _refund_lock_duration: REFUND_LOCK_DURATION_IN_SECONDS,
};


module.exports = {
  ton,
  keys,
  getContractAddressByArgs,
  constructorParams,
};
