const { TONClient } = require('ton-client-node-js');
const fs = require('fs');
const { program } = require('commander');
const yaml = require('js-yaml');
const parse = require('csv-parse/lib/sync');
const assert = require('assert');

program
  .option(
    '-c, --config <config>',
    'Path to the configuration YAML file',
    'config.yaml'
  );

program.parse(process.argv);


// Parse configuration
// Specify includeRecords = true if you need csv data included
const getConfig = (includeRecords = true) => {
  const fileContents = fs.readFileSync(program.config, 'utf8');
  
  const data = yaml.safeLoad(fileContents);

  // - Read config from the yaml
  let records;
  if (includeRecords) {
    // - Parse csv
    records = parse(fs.readFileSync(data.addresses_and_amounts_csv));
  } else {
    records = [];
  }
  
  // - Parse keys
  const keys = JSON.parse(fs.readFileSync(data.keys));
  
  return {
    keys,
    constructorParams: {
      _refund_destination: data.refund_destination,
      _refund_lock_duration: data.refund_lock_duration_in_seconds,
      _addresses: records.map(i => i[0]),
      _amounts: records.map(i => parseInt(i[1], 10)),
    },
    contractAddress: data.contractAddress,
  }
};


// Configure TON client
const ton = new TONClient();

ton.config.setData({
  servers: ['https://main.ton.dev'],
  waitForTimeout: 10000,
});


const checkContractAddress = (address) => {
  try {
    assert.notStrictEqual(
      address,
      '',
      'You should specify contract address in the config file'
    );
  } catch (e) {
    console.log(e.message);
    
    process.exit(1);
  }
};

module.exports = {
  ton,
  getConfig,
  checkContractAddress,
};
