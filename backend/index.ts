import express, { Express } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server listening on port 3001');
});
