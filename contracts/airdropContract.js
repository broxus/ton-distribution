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
			"name": "get_required_amount",
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
     * @return {Promise.<AirdropContract_get_distributed_status>}
     */
    get_distributed_status() {
        return this.run('get_distributed_status', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_distributed_status>}
     */
    get_distributed_statusLocal() {
        return this.runLocal('get_distributed_status', {});
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
     * @typedef AirdropContract_get_required_amount
     * @type {object}
     * @property {string} value0  (uint256)
     */

    /**
     * @return {Promise.<AirdropContract_get_required_amount>}
     */
    get_required_amount() {
        return this.run('get_required_amount', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_required_amount>}
     */
    get_required_amountLocal() {
        return this.runLocal('get_required_amount', {});
    }

}

AirdropContract.package = pkg;

module.exports = AirdropContract;
