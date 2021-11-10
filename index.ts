import { Chain } from "./Classes/Chain";
import { Wallet } from "./Classes/Wallet";

const silver = new Wallet();
const suicide = new Wallet();
const alice = new Wallet();


silver.sendMoney(50, suicide.publicKey);
suicide.sendMoney(23, alice.publicKey);
alice.sendMoney(5, silver.publicKey);


console.log(Chain.instance)