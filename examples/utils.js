const { TONClient } = require('ton-client-node-js');
const fs = require('fs');

const ton = new TONClient();

ton.config.setData({
  servers: ['https://main.ton.dev'],
  waitForTimeout: 10000,
});


const keys = JSON.parse(fs.readFileSync('keys.json'));

module.exports = {
  ton,
  keys,
};
