import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Blockchain from './blockchain';
let app = express();

let nodeId = uuidv4();

app.get('/chain', (req, res) => {
  res.send(JSON.stringify(Blockchain.chain));
});
