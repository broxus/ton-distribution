# Смарт контракт для распределения ТОНов на N адресов

## Запуск контракта

### Компиляция

https://docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity

```
$ solc contracts/airdrop.sol 
Code was generated and saved to file airdrop.code
ABI was generated and saved to file airdrop.abi.json
```

### Конвертация в TVM байткод

```
<PATH_TO>/tvm_linker compile Wallet.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm
```

## Параметры контракта

- `address _refund_destination` адрес для вывода 
- address[] _addresses,
- uint128[] _amounts

