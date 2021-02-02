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
		{"key":1,"name":"_randomNonce","type":"uint16"}
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
     * 
     */
    async deploy(constructorParams, nonce) {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams,
            initParams: {
                _randomNonce: nonce
            },
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
