//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"_refund_destination","type":"address"},
				{"name":"_addresses","type":"address[]"},
				{"name":"_amounts","type":"uint128[]"},
				{"name":"_refund_lock_duration","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "refund",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "distribute",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "get_addresses",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"address[]"}
			]
		},
		{
			"name": "get_amounts",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128[]"}
			]
		},
		{
			"name": "get_refund_destination",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "get_distributed_status",
			"inputs": [
				{"name":"i","type":"uint256"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "get_refund_lock_end_timestamp",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint256"}
			]
		},
		{
			"name": "get_current_balance",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "get_total_amount",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint256"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

const pkg = {
    abi,
    imageBase64: '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',
};

class AirdropContract {
    /**
    * @param {TONClient} client
    * @param {string} address can be null if contract will be deployed
    * @param {TONKeyPairData} keys
    */
    constructor(client, address, keys) {
        this.client = client;
        this.address = address;
        this.keys = keys;
        this.package = pkg;
        this.abi = abi;
    }

    /**
     * @param {object} constructorParams
     * @param {string} constructorParams._refund_destination (address)
     * @param {string[]} constructorParams._addresses (address[])
     * @param {uint128[]} constructorParams._amounts
     * @param {string} constructorParams._refund_lock_duration (uint256)
     */
    async deploy(constructorParams) {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams,
            initParams: {},
            keyPair: this.keys,
        })).address;
    }

    /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async run(functionName, input) {
        const result = await this.client.contracts.run({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

   /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async runLocal(functionName, input) {
        const result = await this.client.contracts.runLocal({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

    /**
     */
    refund() {
        return this.run('refund', {});
    }

    /**
     */
    refundLocal() {
        return this.runLocal('refund', {});
    }

    /**
     */
    distribute() {
        return this.run('distribute', {});
    }

    /**
     */
    distributeLocal() {
        return this.runLocal('distribute', {});
    }

    /**
     * @typedef AirdropContract_get_addresses
     * @type {object}
     * @property {string[]} value0  (address[])
     */

    /**
     * @return {Promise.<AirdropContract_get_addresses>}
     */
    get_addresses() {
        return this.run('get_addresses', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_addresses>}
     */
    get_addressesLocal() {
        return this.runLocal('get_addresses', {});
    }

    /**
     * @typedef AirdropContract_get_amounts
     * @type {object}
     * @property {uint128[]} value0 
     */

    /**
     * @return {Promise.<AirdropContract_get_amounts>}
     */
    get_amounts() {
        return this.run('get_amounts', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_amounts>}
     */
    get_amountsLocal() {
        return this.runLocal('get_amounts', {});
    }

    /**
     * @typedef AirdropContract_get_refund_destination
     * @type {object}
     * @property {string} value0  (address)
     */

    /**
     * @return {Promise.<AirdropContract_get_refund_destination>}
     */
    get_refund_destination() {
        return this.run('get_refund_destination', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_refund_destination>}
     */
    get_refund_destinationLocal() {
        return this.runLocal('get_refund_destination', {});
    }

    /**
     * @typedef AirdropContract_get_distributed_status
     * @type {object}
     * @property {bool} value0 
     */

    /**
     * @param {object} params
     * @param {string} params.i (uint256)
     * @return {Promise.<AirdropContract_get_distributed_status>}
     */
    get_distributed_status(params) {
        return this.run('get_distributed_status', params);
    }

    /**
     * @param {object} params
     * @param {string} params.i (uint256)
     * @return {Promise.<AirdropContract_get_distributed_status>}
     */
    get_distributed_statusLocal(params) {
        return this.runLocal('get_distributed_status', params);
    }

    /**
     * @typedef AirdropContract_get_refund_lock_end_timestamp
     * @type {object}
     * @property {string} value0  (uint256)
     */

    /**
     * @return {Promise.<AirdropContract_get_refund_lock_end_timestamp>}
     */
    get_refund_lock_end_timestamp() {
        return this.run('get_refund_lock_end_timestamp', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_refund_lock_end_timestamp>}
     */
    get_refund_lock_end_timestampLocal() {
        return this.runLocal('get_refund_lock_end_timestamp', {});
    }

    /**
     * @typedef AirdropContract_get_current_balance
     * @type {object}
     * @property {uint128} value0 
     */

    /**
     * @return {Promise.<AirdropContract_get_current_balance>}
     */
    get_current_balance() {
        return this.run('get_current_balance', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_current_balance>}
     */
    get_current_balanceLocal() {
        return this.runLocal('get_current_balance', {});
    }

    /**
     * @typedef AirdropContract_get_total_amount
     * @type {object}
     * @property {string} value0  (uint256)
     */

    /**
     * @return {Promise.<AirdropContract_get_total_amount>}
     */
    get_total_amount() {
        return this.run('get_total_amount', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_total_amount>}
     */
    get_total_amountLocal() {
        return this.runLocal('get_total_amount', {});
    }

}

AirdropContract.package = pkg;

module.exports = AirdropContract;
