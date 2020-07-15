pragma solidity >= 0.6.0;
pragma experimental ABIEncoderV2;
pragma AbiHeader expire;


contract Airdrop {
    address[] addresses;
    uint128[] amounts;
    address refund_destination;
    mapping(uint => bool) distributed;

    modifier alwaysAccept {
        tvm.accept();

        _;
    }

    constructor(
        address _refund_destination,
        address[] _addresses,
        uint128[] _amounts
    ) public {
        require(_amounts.length == _addresses.length);
        require(_amounts.length > 0);
        tvm.accept();

        addresses = _addresses;
        amounts = _amounts;
        refund_destination = _refund_destination;
    }

    function refund(uint128 amount) alwaysAccept public view {
        payable(refund_destination).transfer(amount, true, 3);
    }

    function distribute() alwaysAccept public {
        for (uint i=0; i < addresses.length; i++) {
            if (distributed[i] == false) {
                distributed[i] = true;
                payable(addresses[i]).transfer(amounts[i], true, 3);
            }
        }
    }

    function get_addresses() external view returns(address[]){
        return addresses;
    }

    function get_amounts() external view returns(uint128[]) {
        return amounts;
    }

    function get_refund_destination() external view returns(address) {
        return refund_destination;
    }

    function get_distributed_status(uint i) external view returns(bool) {
        return distributed[i];
    }
}
