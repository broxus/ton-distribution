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
				{"name":"_amounts","type":"uint128[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "refund",
			"inputs": [
				{"name":"amount","type":"uint128"}
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
			"name": "get_nonce",
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
     * @param {object} params
     * @param {uint128} params.amount
     */
    refund(params) {
        return this.run('refund', params);
    }

    /**
     * @param {object} params
     * @param {uint128} params.amount
     */
    refundLocal(params) {
        return this.runLocal('refund', params);
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
     * @typedef AirdropContract_get_nonce
     * @type {object}
     * @property {string} value0  (uint256)
     */

    /**
     * @return {Promise.<AirdropContract_get_nonce>}
     */
    get_nonce() {
        return this.run('get_nonce', {});
    }

    /**
     * @return {Promise.<AirdropContract_get_nonce>}
     */
    get_nonceLocal() {
        return this.runLocal('get_nonce', {});
    }

}

AirdropContract.package = pkg;

module.exports = AirdropContract;
