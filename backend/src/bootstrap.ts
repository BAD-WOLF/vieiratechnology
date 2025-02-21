import dotenv from "dotenv";
import path from "path";

// Carrega variáveis de ambiente explicitamente do arquivo .env específico
dotenv.config({ path: path.resolve(__dirname, "../.env") });
