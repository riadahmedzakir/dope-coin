import * as crypto from "crypto";
import { Block } from "./Block";
import { Transaction } from "./Transaction";

export class Chain {
  public static instance = new Chain();

  chain: Block[];

  constructor() {
    this.chain = [new Block("", new Transaction(100, "genesis", "silver"))];
  }

  get lastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(
    transction: Transaction,
    senderPublicKey: string,
    signature: Buffer
  ): void {
    const verifier = crypto.createVerify("SHA256");
    verifier.update(transction.toString());

    const isValid = verifier.verify(senderPublicKey, signature);

    if (isValid) {
      const newBlock = new Block(this.lastBlock.hash, transction);
      this.mine(newBlock.nonce);
      this.chain.push(newBlock);
    }
  }

  mine(nonce: number) {
    let solution = 1;
    console.log("mining ....");

    while (true) {
      const hash = crypto.createHash("MD5");
      hash.update((nonce + solution).toString()).end();

      const attempt = hash.digest("hex");
      if (attempt.substring(0, 4) === "0000") {
        return solution;
      }

      solution += 1;
    }
  }
}
