import dotenv from "dotenv";
import path from "path";

// Carrega variáveis de ambiente explicitamente do arquivo .env específico
dotenv.config({ path: path.resolve(__dirname, "..","..",".env") });

export default {
  secret: process.env.JWT_SECRET || "mysecret",
  expiresIn: "15m",
  refreshSecret: process.env.JWT_REFRESH_SECRET || "myanothersecret",
  refreshExpiresIn: "7d"
};
