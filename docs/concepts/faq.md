
# FAQ

* [FAQ](#faq)
    * [1.Please briefly describe the IBax blockchain platform (IBax)?](#1Please-briefly-describe-IBAX)
    * [2.Is IBax applicable for Bitcoin, Ethereum or other blockchains?](#2is-ibax-applicable-for-bitcoin-ethereum-or-other-blockchains)
    * [3.What are the main differences between IBax and other public blockchain platforms with built-in mechanisms for executing smart contracts?](#3what-are-the-main-differences-between-ibax-and-other-public-blockchain-platforms-with-built-in-mechanisms-for-executing-smart-contracts)
    * [4.Do you have your own cryptocurrency?](#4do-you-have-your-own-cryptocurrency)
    * [5.What is a master node and who can maintain it?](#5What-is-a-honor-node-and-who-can-maintain-it)
    * [6.What is a platform ecosystem?](#6what-is-a-platform-ecosystem)
    * [7.Who can create an ecosystem?](#7who-can-create-an-ecosystem)
    * [8.How do users become members of the ecosystem?](#8how-do-users-become-members-of-the-ecosystem)
    * [9.Can one user create multiple ecosystems?](#9can-one-user-create-multiple-ecosystems)
    * [10.What is a platform application?](#10what-is-a-platform-application)
    * [11.What programming language is used to create the application?](#11what-programming-language-is-used-to-create-the-application)
    * [12.What software is used to create applications and interact with users?](#12what-software-is-used-to-create-applications-and-interact-with-users)
    * [13.Can platform contracts use third-party APIs to access data?](#13can-platform-contracts-use-third-party-apis-to-access-data)
    * [14.Can the contract stored in the blockchain be changed?](#14can-the-contract-stored-in-the-blockchain-be-changed)
    * [15.What is smart law?](#15what-is-smart-law)
    * [16.Can the contract call and execute other contracts?](#16can-the-contract-call-and-execute-other-contracts)
    * [17.Does the application run with a master contract?](#17does-the-application-run-with-a-master-contract)
    *  [18.Can the application be localized for different languages?](#18can-the-application-be-localized-for-different-languages)
    *  [19.Can I create a page without using a template language?](#19can-i-create-a-page-without-using-a-template-language)
    *  [20.Are the pages stored in the blockchain?](#20are-the-pages-stored-in-the-blockchain)
    *  [21.What types of databases can be used for contract operations?](#21what-types-of-databases-can-be-used-for-contract-operations)
    *  [22.How to manage access to the data in the database table?](#22how-to-manage-access-to-the-data-in-the-database-table)
    * [23.Can an application in an ecosystem exchange data with other applications from another ecosystem?](#23can-an-application-in-an-ecosystem-exchange-data-with-other-applications-from-another-ecosystem)
    * [24.Should all applications in a new ecosystem be written from scratch?](#24should-all-applications-in-a-new-ecosystem-be-written-from-scratch)
    * [25.Are there any fees for the operation of applications?](#25are-there-any-fees-for-the-operation-of-applications)
    * [26.Who pays for the operation of applications?](#26who-pays-for-the-operation-of-applications)
    * [27.How to protect the applications in the ecosystem from attacks due to vulnerabilities?](#27how-to-protect-the-applications-in-the-ecosystem-from-attacks-due-to-vulnerabilities)
    * [28.What new features will be implemented in future plans?](#28what-new-features-will-be-implemented-in-future-plans)
    * [29.How to prove its operability?](#29how-to-prove-its-operability)

### 1.Please briefly describe IBAX?

  * It is a blockchain platform that aims to build a digital ecosystem based on an integrated application development environment that has a multi-level permission system for managing the access rights to data, interfaces, and smart contracts.

### 2.Is IBax applicable for Bitcoin, Ethereum or other blockchains?

  * Not applicable. IBax is built on the basis of its own original blockchain.

### 3.What are the main differences between IBax and other public blockchain platforms with built-in mechanisms for executing smart contracts?

  * IBax has unique features that cannot be found in the above-mentioned blockchains:
    *  has an integrated application development environment in a single client software;
      *  the special template language V-Style for page design and the contract language V-Logic coordinate with each other;
      *  has a multi-level permission system for managing the access rights to data, interfaces and smart contracts, in which permissions can be granted to members, roles and contracts;
      * the ecosystem, used to create blockchain applications and autonomous software environments for users to interact with them;
      * the legal system, a set of rules written in smart laws (dedicated smart contracts), regulates the relationship between platform users and defines the process of changing protocol parameters for problem solving.

### 4.Do you have your own cryptocurrency?

  * Yes, IBax uses its own token, IBXC.

### 5.What is a honor node and who can maintain it?

  * The honor node is the network node that has the authority to verify transactions and generate new blocks.
  * Any network node with sufficient processing power and fault tolerance can become a honor node. IBax uses a Proof of Authority (PoA) consensus mechanism. Nodes can become verification nodes based on ecosystem voting, but only ecosystems that are proven by the platform's token owner to have normal operational capabilities can participate in such voting. Using this authorization algorithm, the master node is run by major ecosystems because it is in their best interest to maintain the network operation.

### 6.What is a platform ecosystem?

  * An ecosystem is actually an autonomous software environment used to create blockchain applications and the operations of users in them.

### 7.Who can create an ecosystem?

  * All users of the platform can create new ecosystems.

### 8.How do users become members of the ecosystem?

  * Users may be registered as members of any existing ecosystem. The ecosystem strategy defines different member admission procedures, which publishes key public information of the new ecosystem in a dedicated ecosystem catalog.

### 9.Can one user create multiple ecosystems?

  * Yes, each user can create any number of ecosystems and can also become a member of multiple ecosystems.

### 10.What is a platform application?

  * An application is a complete software product that implements a function or service. The application consists of database tables, contracts and pages.
### 11.What programming language is used to create the application?
  * The contract is written in the V-Logic language, which is developed by the platform team, For more information, see: Smart Contract.

  * The page is written in V-Style language, which is a page template language. For more information, see: Template Language.

### 12.What software is used to create applications and interact with users?

  * The application program is written and executed in Weaver, no other software is required.

### 13.Can platform contracts use third-party APIs to access data?

  * No, the contract can only directly access the data stored in the blockchain. :ref:CLB <Virtual Private Ecosystem> is used to process external data sources.

### 14.Can the contract stored in the blockchain be changed?

  * Yes, the contract can be changed. The permission to change the contract is specified by its creator, who can grant the permission to refuse to change, or grant permission to make changes with contracts or by members, or configure a complex set of conditions in the smart law.
  * Weaver provides access to all versions of contracts.

### 15.What is smart law?

  * Smart law is a contract designed to control and restrict the operation of conventional contracts, thereby controlling and restricting the activities of ecosystem members.
  * A set of smart laws can be regarded as the legal system of an ecosystem.

### 16.Can the contract call and execute other contracts?

  * Yes, the contract can call other contracts by direct addressing and provide parameters for it, or call the contract by link name. For more information, see: Smart Contract.

### 17.Does the application run with a master contract?

  * No, the contract is an autonomous program module that performs certain functions. Each contract is configured to receive specified data, then check the correctness of these data, and perform some operations that are recorded in the database as transactions.

### 18.Can the application be localized for different languages?

  * Yes, Weaver has a built-in localization support mechanism and can create pages in any language.

### 19.Can I create a page without using a template language?

  * Yes, it can be done using the platform RESTful API v2.

### 20.Are the pages stored in the blockchain?

  * Yes, the pages and contracts are stored in the blockchain, which prevents them from being forged.

### 21.What types of databases can be used for contract operations?

  * Currently, PostgreSQL is used.

### 22.How to manage access to the data in the database table?

  * You can add new fields, new entries, or change the permissions of the data in columns for ecosystem members, roles, or specified contract configurations. Except for contracts created by performing specific operations.

### 23.Can an application in an ecosystem exchange data with other applications from another ecosystem?

  * Yes, data exchange can be organized through global data tables that apply to all ecosystems.

### 24.Should all applications in a new ecosystem be written from scratch?

  * No, every new ecosystem has some applications out of the box:
      * A mechanism to manage ecosystem members and roles;
      * Issuing and configuring other tokens;
      *  A voting system;
      *  A notification system;
      *  A messenger between ecosystem members.

 These applications can be edited and configured to meet the special needs of any ecosystem.

### 25.Are there any fees for the operation of applications?

  * Yes, the use of the resources of the honor node requires payment in the platform.

### 26.Who pays for the operation of applications?

 For corresponding account addresses, there are currently 4 ways to pay for the operation of applications:
  * For contract callers, the fee will be paid from the user's account by default when the user calls the contract; 
  * For contract binding parties, the fee will be paid from the binding account specified by the contract creator;
  * For ecosystem creators, the fee of all applications within an ecosystem will be paid by the ecosystem creator respectively;

  * Exclusive ecosystem wallet. Each ecosystem has an exclusive account. If the ecosystem creator activated it, the fee of all applications within the ecosystem will be paid from this account.

 Order of payment precedence: Exclusive ecosystem wallet> Ecosystem creator> Contract binding party> Contract caller.

### 27.How to protect the applications in the ecosystem from attacks due to vulnerabilities?

  * The platform team also knows that there is no way to completely avoid errors in the application code, especially considering that the application can be written by any user. This is why we decided to establish a mechanism to eliminate the consequences of exploiting vulnerabilities. The legal system can stop the attack operation of the application and use some transactions to restore it to its original state. The legal system stipulates the permissions to execute such contracts and the voting procedures for granting these permissions.

### 28.What new features will be implemented in future plans?

  * Visual smart contract designer;


  * Support for hybrid databases (SQL and NoSQL);

  * Parallel multi-threaded processing of transactions from different ecosystems;

  * Perform resource-intensive calculations on the client;

  * Ecosystem hosting and computing power exchange;

  * Child nodes, only store some blocks on the server;

  * Semantic references (ontology) are used to unify the operation of data in the platform.

### 29.How to prove its operability?

  * A number of proof of concept projects and cases have been implemented on the IBax Network: a socialized tax collection and electronic invoice generation and circulation system, a medical apparatus and instruments supervision, forgery prevention and tracing system, a financing and supervision system, a voting/poll system, business registration, trade finance tools, assets registration contract management system, etc.