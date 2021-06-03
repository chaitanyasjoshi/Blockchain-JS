import Block from './block.js';

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    const genesisDate = String(new Date());
    return new Block('Genesis block', 0, genesisDate, '0');
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.previousHash = this.getLastBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    const chain = this.chain;

    for (let i = 1; i < chain.length; i++) {
      if (chain[i].hash !== chain[i].calculateHash()) {
        console.log(`Block ${i} has been currupted`);
        return false;
      }

      if (chain[i].previousHash !== chain[i - 1].hash) {
        console.log(`Block ${i} has been corrupted`);
        return false;
      }
    }

    console.log('Chain is valid');
    return true;
  }
}

// let blocksToAdd = 5;

// const PolyChain = new Blockchain();

// for (let i = 0; i < blocksToAdd; i++) {
//   PolyChain.addNewBlock(
//     new Block({
//       sender: 'Polycode',
//       receiver: 'Local',
//       message: `Block ${PolyChain.chain.length} has been added to the chain`,
//     })
//   );
// }

// PolyChain.chain.forEach((block) => {
//   console.log(block);
// });

export default new Blockchain();
