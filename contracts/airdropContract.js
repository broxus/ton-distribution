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
