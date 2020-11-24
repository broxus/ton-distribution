pragma solidity >= 0.6.0;
pragma AbiHeader expire;


/**
 * @title TONs distribution smart contract. Pretty close to the regular airdrops.
 */
contract Airdrop {
    address[] addresses;
    uint128[] amounts;
    address refund_destination;
    uint256 refund_lock_duration_end;

    bool distributed = false;
    uint total_amount = 0;
    uint required_fee = 1000000000;

//    modifier refundLockPassed {
//        require(now > refund_lock_duration_end, 4);
//        tvm.accept();
//
//        _;
//    }

    // 1 TON should be enough for any possible fees
    // The rest of the balance can always be refunded
    modifier balanceSufficient {
        require(address(this).balance > total_amount + required_fee, 105);
        tvm.accept();

        _;
    }

    modifier distributedStatus(bool status) {
        require(distributed == status, 108);
        tvm.accept();

        _;
    }

    modifier refundLockPassedOrDistributionIsOver() {
        require((distributed == true) || (now > refund_lock_duration_end), 107);
        tvm.accept();

        _;
    }


    /**
     * @dev Creates new contract. All contract parameters should be set up
     *      in constructor and can't be changed later.
     *
     * @param _refund_destination Receiver of the TONs in case of refund
     * @param _addresses List of receivers for distribution. No more than 100 addresses.
     * @param _amounts   List of amounts specified for each receiver from the _addresses
     * @param _refund_lock_duration The duration of the refund lock in seconds. No more
     *      than 1 week = 604800 seconds and no less than 1 hour = 3600 seconds. (fool tolerance)
     */
    constructor(
        address _refund_destination,
        address[] _addresses,
        uint128[] _amounts,
        uint256 _refund_lock_duration
    ) public {
        require(msg.pubkey() == tvm.pubkey(), 106);
        require(_amounts.length == _addresses.length, 101);
        require((_addresses.length > 0) && (_addresses.length < 100), 102);
        require((_refund_lock_duration <= 604800) && (_refund_lock_duration >= 3600), 103);
        tvm.accept();

        addresses = _addresses;
        amounts = _amounts;
        refund_destination = _refund_destination;

        refund_lock_duration_end = now + _refund_lock_duration;

        for (uint i=0; i < amounts.length; i++) {
            total_amount += amounts[i];
        }
    }

    /**
     * @dev Sends all contract's balance to the refund_destination
     *      Can be executed only after
     *      1. Refund lock passed
     *      2. Distribution finished
     */
//    function refund() refundLockPassed distributedStatus(true) public view {
    function refund() refundLockPassedOrDistributionIsOver public view {
        payable(refund_destination).transfer(0, false, 128);
    }

    /**
     * @dev Distributes contract balance to the receivers from the addresses
     */
    function distribute() balanceSufficient distributedStatus(false) public {
        distributed = true;
        for (uint i=0; i < addresses.length; i++) {
            payable(addresses[i]).transfer(amounts[i], false, 1);
        }
    }

    function get_addresses() external view returns(address[]) {
        return addresses;
    }

    function get_amounts() external view returns(uint128[]) {
        return amounts;
    }

    function get_refund_destination() external view returns(address) {
        return refund_destination;
    }

    function get_distributed_status() external view returns(bool) {
        return distributed;
    }

    function get_refund_lock_end_timestamp() external view returns(uint256) {
        return refund_lock_duration_end;
    }

    function get_current_balance() external pure returns(uint128) {
        return uint128(address(this).balance);
    }

    function get_required_amount() external view returns(uint) {
        return total_amount + required_fee;
    }
}
