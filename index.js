import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Blockchain from './blockchain.js';
let app = express();

let nodeId = uuidv4();

app.get('/chain', (req, res) => {
  res.send(JSON.stringify(Blockchain.chain));
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Launching blockchain node on port ${port}`);
});
