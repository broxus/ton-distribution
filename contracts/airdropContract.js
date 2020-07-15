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

}

AirdropContract.package = pkg;

module.exports = AirdropContract;
