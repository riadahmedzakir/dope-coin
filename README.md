# DOPE-COIN

    The Dopest coin of them all.

Just learning about block chain xDD

## What is bitcoin ? 

Each Bitcoin is basically a computer file which is stored in a 'digital wallet' app on a smartphone or computer.

People can send Bitcoins (or part of one) to your digital wallet, and you can send Bitcoins to other people.

Every single transaction is recorded in a public list called the blockchain.

This makes it possible to trace the history of Bitcoins to stop people from spending coins they do not own, making copies or undo-ing transactions.

From a financial perspective, the block chain is a shared public ledger that contains the history of transaction which is distributed and syncronized around the world, which eleminates the need for a central authority to maintain and validate it.

From technical perspective, we can think of the block chain as a database that is structured as a linked-list where each block contains a record of a group of transactions that has been permantently commited to the database. Each new block is linked to the previous block of the block chain and it's creation goes through a very strict crpyotographic rules.

Each user/wallet has an unique public key for recieving money and an unique private key for spending money. But before spending money, the owner needs to prove that he is the owner of a public key that has been used to send money in the past. 

Each tranasction contains a hash which is a encrypted repreasetation of the previous transction and the new owner's public key and signed by the previous owners private key.


## Transaction Class 

Fundamental purpose of any crpyto currency. To transfer fund to one user to another user. The class has three properties.

- Amount
- Payer
- Payee

## Block

- Previous Hash
- Transaction
- Time stamp
- get Hash

        We create a hash with the strigified object of itself and return the hash digest. The object has is a transaction which contains a link to the previous transaction with a timestamp.

- Mine

        Will attempt to find a value when added to the nonce will produce a hash that starts with 0000. The only way to find this value is brute force.

### Nonce value 

A one time use random value.


## Chain

The program will contain only one block chain. So we will set the class to a singleton instance. Chain first value or the genesis block has previous hash to null.

- Chain, which is a array of blocks.
- get last Block 
- add Block

        Create a verifier with node crypto. Which will take in the transaction, senders public key and signature. If verified the new block will be added to the block chain.

## Wallet

- public key, for recieving money
- private key, for spending money
- send money (amount, payee public key)

        Create a hash with sha256 (sign) using the transaction data as value. Afterwards sign the hash with the user's private key. This works as a onetime password.

        Encryption with rsa, which unlike sha allows a message to be encrpyted with the public key and decrypt with private key. But, here we will use the keypair to create a digital signature. Thus we don't need to encrpt the message, instead create a sign with the transaction data and the private key.

        This works as a one time password which allows the verification of user without exposing the private key but it can be verified with the public key.

## Hash

Take the value of a arbitery size like a Transaction then map it to a fixed lenght like a hexadecimal string. The value returned from a hash function is called a hash or a hash digest. Hash cannot be reverted to reconstruct the original value. But hash can be compared to 

<img src="Assets/hash.png">

## Mining 

What happens when the owner tries to double spend the money (send to two user at the same time). Mining is a system where multiple computers around the world to agree on the appropriate state of the entire state or ledger. Each new transaction is broadcasted to all nodes on the network. The transactions are packedged into a block where miner will then spend computing power to validate proof of work. They compute a proof or a random problem that is very hard to solve but easy to verify. The first miner to solve the proof, which happens by dumb luck is gifted a portion of the bitcoin as a reward.