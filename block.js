import { createHash } from 'crypto';

class Block {
  constructor(data, timestamp = String(new Date()), previousHash) {
    this.data = data;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.nonce = 0;

    this.hash = this.calculateHash();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`New block mined: ${this.hash}`);
  }

  calculateHash() {
    const hash = createHash('sha256');
    return hash
      .update(
        JSON.stringify(this.data) +
          this.timestamp +
          this.previousHash +
          this.nonce
      )
      .digest('hex');
  }
}

export default Block;
