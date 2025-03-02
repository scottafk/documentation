
# Daemon

* [Daemon](#daemon)


In this section, we will describe how IBax nodes interact with each other from a technical perspective.
## About the server daemon
The server daemon needs to run on every network node, which executes various server functions and supports IBax's blockchain protocol. In the blockchain network, the daemon distributes blocks and transactions, generates new blocks, and verifies blocks and transactions received, and it can avoid the fork issue.
### Honor node daemon
A honor node runs the following server daemons:
* BlockGenerator daemon
    * Generating new blocks.

* BlockCollection daemon

    * Downloading new blocks from other nodes.

* Confirmations daemon

    * Confirming that blocks on the node also exist on most other nodes.

* Disseminator daemon

    * Distributing transactions and blocks to other honor nodes.

* QueueParserBlocks daemon

    * Blocks in the queue, which contains blocks from other nodes.

    * Block processing logic is the same as BlockCollection daemon.

* QueueParserTx daemon

    * Verifying the transactions in queue.

* Scheduler daemon

    * Running contracts as scheduled.

### Guardian node daemon

A guardian node runs the following server daemons:

* BlockCollection daemon
* Confirmations daemon
* Disseminator daemon
* QueueParserTx
* Scheduler

## BlockCollection daemon

This daemon downloads blocks and synchronizes the blockchain with other network nodes.

### Blockchain synchronization

This daemon synchronizes the blockchain by determining the maximum block height in the blockchain network, requesting new blocks, and solving the fork issue in the blockchain.

#### Check for blockchain updates

This daemon sends requests from the current block ID to all honor nodes.

If the current block ID of the node running the daemon is less than the current block ID of any honor node, the blockchain network node is considered out of date.

#### Download new blocks

The node that returns the largest current block height is considered the latest node.
The daemon downloads all unknown blocks.

#### Solving the fork issue

If a fork is detected in the blockchain, the daemon moves the fork backward by downloading all blocks to a common parent block.
When found the common parent block, a blockchain rollback is performed on the node running the daemon, and the correct block is added to the blockchain until the latest one is included.

### Tables

The BlocksCollection daemon uses the following tables:

* block_chain
* transactions
* transactions_status
* info_block

### Request

The BlockCollection daemon sends the following requests to other daemons:

* Type 10 points to the largest block ID among all honor nodes.
* Type 7 points to the data with the largest block ID.

## BlockGenerator daemon

The BlockGenerator daemon generates new blocks.

### Pre-verification

The BlockGenerator daemon analyzes the latest blocks in the blockchain to make new block generation plans. 

If the following conditions are met, a new block can be generated:

* The node that generated the latest block is in a node within the honor node list and runs the daemon.
* The shortest time since the latest unverified block was generated.

### Block generation

A new block generated by the daemon contains all new transactions, which can be received from the Disseminator daemon of other nodes or generated by the node running the daemon. The block generated is stored in the node database.

### Tables

The BlockGenerator daemon uses the following tables:

* block_chain (saves new blocks)
* transactions
* transactions_status
* info_block

### Request

The BlockGenerator daemon does not make any request to other daemons.

## Disseminator daemon

The Disseminator daemon sends transactions and blocks to all honor nodes.

### Guardian node

When working on a guardian node, the daemon sends transactions generated by its node to all honor nodes.

### Honor node

When working on a honor node, the daemon sends blocks generated and transaction hashes to all honor nodes.

Then, the honor node responds to transaction requests unknown to it. The daemon sends the complete transaction data as a response.

### Tables

The Disseminator daemon uses the following tables:

* transactions

### Request

The Disseminator daemon sends the following requests to other daemons:

* Type 1 Send transactions and block hashes to the honor node.
* Type 2 Receive transaction data from the honor node.

## Confirmations daemon

The Confirmations daemon checks whether all the blocks in its node exist on most other nodes.

### Block confirmation

A block confirmed by multiple node in the network is considered as a confirmed block.

The daemon confirms all blocks one by one starting from the first that is currently not confirmed in the database.

Each block is confirmed in the way as follows:

* Sending a request containing the ID of the block being confirmed to all honor nodes.
* All honor nodes respond to the block hash.
* If the hash responded matches the hash of the block on the daemon node, the confirmation counter value is increased. If not, the cancellation counter value is increased.

### Tables

The Confirmations daemon uses the following tables:

* confirmation
* info_block

### Request

The Confirmations daemon sends the following requests to other daemons:

* Type 4 Request block hashes from the honor node.

## TCP service protocol

The TCP service protocol works on honor nodes and guardian nodes, which uses the binary protocol on TCP to requests from the BlocksCollection, Disseminator, and Confirmation daemons.

## Request type

Each request has a type defined by the first two bytes of the request.

## Type 1

#### Request sender

This request is sent by the Disseminator daemon.

#### Request data

Hashes of the transaction and block.

#### Request processing

The block hash is added to the block queue.

Analyzes and verifies the transaction hashes, and select transactions that have not yet appeared on the node.

#### Response

No. After processing the request, a Type 2 request is issued.

## Type 2

#### Request sender

This request is sent by the Disseminator daemon.

#### Request data

The transaction data, including the data size:

* data_size (4 bytes)

* Size of the transaction data, in bytes.

* data (data_size bytes)

The transaction data.

Request processing

Verifies the transaction and add it to the transaction queue.

#### Response

No.

## Type 4

#### Request sender

This request is sent by the Confirmations daemon.

#### Request data

Block ID.

#### Response

Block hash.

Returns 0 if not having a block with this ID.

## Type 7

#### Request sender

This request is sent by the BlockCollection daemon.

#### Request data

Block ID.

* block_id (4 bytes)

#### Response

The block data, including data size.

* data_size (4 bytes)

* Size of the block data, in bytes.

* data (data_size bytes)

The block data.

The connection is closed if not having a block with this ID.

## Type 10

#### Request sender

This request is sent by the BlockCollection daemon.

#### Request data

No.

#### Response

Block ID.

* block_id (4 bytes)

