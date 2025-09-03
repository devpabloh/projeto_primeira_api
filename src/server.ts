import dotenv from "dotenv";
import express from "express";

import { categoriesRoutes } from "./routes/categories.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
