import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "está rodando" });
});

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
