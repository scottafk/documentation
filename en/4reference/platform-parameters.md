

    Docs »
    Platform Parameters

Platform Parameters

These are parameters to configure IBAX. They are applicable to the blockchain network and all ecosystems within it.
Location to store platform parameters

Platform parameters are stored in the system_parameters table.

This table is located in the first (default) ecosystem created on the blockchain network.
Change of platform parameters

Change of platform parameters can only be made through voting. You can only use the UpdateSysParam contract to change any platform parameter, which is managed by definitions in the legal system of the platform.
Configure platform parameters
Configure the blockchain network

Nodes:

    full_nodes
    number_of_nodes

Node bans:

    incorrect_blocks_per_day
    node_ban_time
    node_ban_time_local

Configure a new ecosystem

Default page and menu:

    default_ecosystem_page
    default_ecosystem_menu

Default contract: 

    default_ecosystem_contract

Configure the database

Table limits:

    max_columns
    max_indexes

Configure the generation of blocks

Time limits:

    gap_between_blocks
    max_block_generation_time

Transaction limits:

    max_tx_block
    max_tx_block_per_user

Size limits:

    max_tx_size
    max_block_size
    max_forsign_size

Gas limits:

    max_fuel_block
    max_fuel_tx

Block rollback limits:

    rollback_blocks

Configure the gas tokens

Rewards and commissions:

    block_reward
    commission_wallet
    commission_size

Gas rate conversion:

    fuel_rate
    price_create_rate

Transaction size and data price:

    price_tx_data
    price_tx_size_wallet

Price for new elements:

    price_create_ecosystem
    price_create_table
    price_create_column
    price_create_contract
    price_create_menu
    price_create_page
    price_create_application

Price for operations:

|

    price_exec_bind_wallet
    price_exec_address_to_id
    price_exec_column_condition
    price_exec_compile_contract
    price_exec_contains
    price_exec_contracts_list
    price_exec_contract_by_name
    price_exec_contract_by_id
    price_exec_create_column
    price_exec_create_ecosystem
    price_exec_create_table
    price_exec_unbind_wallet
    price_exec_ecosys_param
    price_exec_eval
    price_exec_eval_condition
    price_exec_flush_contract
    price_exec_has_prefix
    price_exec_id_to_address

 |

    price_exec_is_object
    price_exec_join
    price_exec_json_to_map
    price_exec_len
    price_exec_perm_column
    price_exec_perm_table
    price_exec_pub_to_id
    price_exec_replace
    price_exec_sha256
    price_exec_size
    price_exec_substr
    price_exec_sys_fuel
    price_exec_sys_param_int
    price_exec_sys_param_string
    price_exec_table_conditions
    price_exec_update_lang
    price_exec_validate_condition

 |
Depreciated

Depreciated parameters:

    blockchain_url

Details of platform parameters
block_reward

    The number of IBXC tokens granted to the honor node that generates the block.

    The account that receives the reward is specified in the full_nodes parameter.

blockchain_url

    Depreciated. 

commission_size

    Percentage of the commission.

    The amount of the commission is calculated as a percentage of the total cost of implement the contract. The unit of the commission token is IBXC.

    The commission will be transferred to the account address specified in the commission_wallet parameter.

commission_wallet

    The account address to receive the commission.

    The amount of commission is specified by the commission_size parameter.

default_ecosystem_contract

    The source code of the default contract in the new ecosystem.

    This contract provides access to the ecosystem creator.

default_ecosystem_menu

    The source code of the default menu of the new ecosystem.

default_ecosystem_page

    The source code of the default page of the new ecosystem.

gas_rate

    The exchange rates of different ecosystem tokens by gas unit.

    The format of this parameter:

        [["ecosystem_id", "token_to_fuel_rate"], ["ecosystem_id2", "token_to_fuel_rate2"], ...]

            ecosystem_id

                Ecosystem ID.

            token_to_fuel_rate

                Exchange rate of the token by gas unit.

    For example:

        [["1","1000000000000"], ["2", "1000"]]

        One token of Ecosystem 1 is exchanged for 1,000,000,000,000 gas units. One token of Ecosystem 2 is exchanged for 1,000 gas units.

price_create_rate

    The gas rate of a new element.

full_nodes

    The list of honor nodes of the blockchain network.

    The format of this parameter: 

        [{"api_address":"https://apihost1:port1","public_key":"nodepub1","tcp_address":"tcphost1:port2"},{"api_address":"https://apihost2:port1","public_key":"nodepub2","tcp_address":"tcphost2:port2"}]

            tcp_address

                TCP address and port of the node host.

                Transactions and new blocks will be sent to this host address, which can also be used to obtain the complete blockchain from the first block.

            api_address

                API address and port of the node host.

                Through the API address, you can access any function of the platform without using Weaver. See details in RESTful API.

            public_key

                Public key of the node, which is used to verify the block signature.

gap_between_blocks

    The time interval (in seconds) of generating two blocks on a node.

    All nodes in the network use it to determine when to generate a new block. If the current node does not generate a new block within this time period, the turn passes to the next node in the list of honor nodes.

    The minimum value of this parameter is 1 second.

incorrect_blocks_per_day

    The number of bad blocks that a node is allowed to generate per day before being banned.

    When more than half of the nodes in the network receive the same number of bad blocks from a node, the node will be banned from the network within a time period specified in node_ban_time.

max_block_generation_time

    The maximum time for generating a block, in milliseconds. If a block is not successfully generated within this time period, a timeout error will be reported.

max_block_size

    The maximum size of a block, in bytes.

max_columns

    The maximum number of fields in a single table.

    However, it does not include the predefined id column.

max_forsign_size

    The maximum size of a transaction signature in bytes. 

max_fuel_block

    The maximum total gas fee of a single block.

max_fuel_tx

    The maximum total gas fee of a single transaction.

max_indexes

    The maximum number of primary key fields in a single table.

max_tx_block

    The maximum number of transactions in a single block.

max_tx_block_per_user

    The maximum number of transactions of an account in a block.

max_tx_size

    The maximum size of a transaction in bytes.

node_ban_time

    The global ban period of the node, in milliseconds.

    When more than half of the nodes in the network receive bad blocks from a node up to the number of incorrect_blocks_per_day, the node will be banned in the network for this time period.

node_ban_time_local

    The local ban period of the node, in milliseconds.

    When a node receives an incorrect block from another node, it will locally ban the sender's node during this time period.

number_of_nodes

    The maximum number of honor nodes in the full_nodes parameter. 

price_create_ecosystem

    A gas fee to create a new single ecosystem.

    This parameter defines the additional gas fee of the @1NewEcosystem contract. When the contract is implemented, A gas fee for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_create_application

    A gas fee to create a new single application.

    This parameter defines the additional gas fee of the @1NewApplication contract. When the contract is implemented, A gas fee for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_create_table

    A gas fee to create a new single table.

    This parameter defines the additional gas cost of the @1NewTable contract. When the contract is implemented, the gas cost for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_create_column

    A gas fee to create a new single table field.

    This parameter defines the additional gas cost of the @1NewColumn contract. When the contract is implemented, the gas cost for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_create_contract

    A gas fee to create a new single contract.

    This parameter defines the additional gas cost of the @1NewContract contract. When the contract is implemented, the gas cost for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_create_menu

    A gas fee to create a new single menu.

    This parameter defines the additional gas cost of the @1NewMenu contract. When the contract is implemented, the gas cost for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_create_page

    A gas fee to create a new single page.

    This parameter defines the additional gas cost of the @1NewPage contract. When the contract is implemented, the gas cost for executing various functions of this contract will also be calculated and included in the total cost.

    This parameter is calculated in gas units. Use fuel_rate and price_create_rate to convert gas units to IBXC tokens.

price_exec_address_to_id

    A gas fee of calling theAddressToId() function, calculated in gas units. 

price_exec_bind_wallet

    A gas fee of calling theActivate() function, calculated in gas units. 

price_exec_column_condition

    A gas fee of calling the ColumnCondition() function, calculated in gas units. 

price_exec_compile_contract

    A gas fee of calling the CompileContract() function, calculated in gas units. 

price_exec_contains

    A gas fee of calling the Contains() function, calculated in gas units. 

price_exec_contract_by_id

    A gas fee of calling the GetContractById() function, calculated in gas units. 

price_exec_contract_by_name

    A gas fee of calling the GetContractByName() function, calculated in gas units. 

price_exec_contracts_list

    A gas fee of calling the ContractsList() function, calculated in gas units. 

price_exec_create_column

    A gas fee of calling the CreateColumn() function, calculated in gas units. 

price_exec_create_ecosystem

    A gas fee of calling the CreateEcosystem() function, calculated in gas units. 

price_exec_create_table

    A gas fee of calling the CreateTable() function, calculated in gas units. 

price_exec_ecosys_param

    A gas fee of calling the EcosysParam() function, calculated in gas units. 

price_exec_eval

    A gas fee of calling the Eval() function, calculated in gas units. 

price_exec_eval_condition

    A gas fee of calling the EvalCondition() function, calculated in gas units. 

price_exec_flush_contract

    A gas fee of calling the FlushContract()  function, calculated in gas units. 

price_exec_has_prefix

    A gas fee of calling the HasPrefix()function, calculated in gas units. 

price_exec_id_to_address

    A gas fee of calling the IdToAddress() function, calculated in gas units. 

price_exec_is_object

    A gas fee of calling the IsObject() function, calculated in gas units. 

price_exec_join

    A gas fee of calling the Join() function, calculated in gas units. 

price_exec_json_to_map

    A gas fee of calling the JSONToMap() function, calculated in gas units. 

price_exec_len

    A gas fee of calling the Len() function, calculated in gas units. 

price_exec_perm_column

    A gas fee of calling the PermColumn() function, calculated in gas units. 

price_exec_perm_table

    A gas fee of calling the PermTable() function, calculated in gas units. 

price_exec_pub_to_id

    A gas fee of calling the PubToID() function, calculated in gas units. 

price_exec_replace

    A gas fee of calling the Replace() function, calculated in gas units. 

price_exec_sha256

    A gas fee of calling the Sha256() function, calculated in gas units. 

price_exec_size

    A gas fee of calling the Size() function, calculated in gas units. 

price_exec_substr

    A gas fee of calling theSubstr() function, calculated in gas units. 

price_exec_sys_fuel

    A gas fee of calling the SysFuel() function, calculated in gas units. 

price_exec_sys_param_int

    A gas fee of calling the SysParamInt() function, calculated in gas units. 

price_exec_sys_param_string

    A gas fee of calling the SysParamString() function, calculated in gas units. 

price_exec_table_conditions

    A gas fee of calling the TableConditions() function, calculated in gas units. 

price_exec_unbind_wallet

    A gas fee of calling the Deactivate() function, calculated in gas units. 

price_exec_update_lang

    A gas fee of calling the UpdateLang() function, calculated in gas units. 

price_exec_validate_condition

    A gas fee of calling the ValidateCondition()  function, calculated in gas units. 

price_tx_data

    A gas fee for every 1024 bytes of a transaction, calculated in gas units. 

price_tx_size_wallet

    A fee by transaction size, its unit is the IBXC token.

    Except the ecosystem 1, a block space usage fee will be incurred proportionally when implementing a contract in other ecosystems, and its rate is  price_tx_size_wallet IBXC tokens per megabyte.

rollback_blocks

    Maximum number of blocks that can be rolled back when detecting a fork in the blockchain.

