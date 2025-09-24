import dotenv from "dotenv";
import express from "express";

import {router} from './routes/index.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
