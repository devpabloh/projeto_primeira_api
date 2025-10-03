import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express"

import swaggerFile from "swagger.json"

import "./database"

import {router} from './routes/index.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
