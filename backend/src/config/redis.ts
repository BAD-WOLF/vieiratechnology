import dotenv from "dotenv";
import path from "path";

// Carrega variáveis de ambiente explicitamente do arquivo .env específico
dotenv.config({ path: path.resolve(__dirname, "..","..",".env") });

export const REDIS_HOST: string = process.env.REDIS_HOST || "localhost";
export const REDIS_PORT: number = parseInt(process.env.REDIS_PORT || "6379", 10);
export const REDIS_PASSWORD: string = process.env.REDIS_PASSWORD || "";
export const REDIS_OPT_LIMITER_MAX: number = parseInt(process.env.REDIS_OPT_LIMITER_MAX || "1", 10);
export const REDIS_OPT_LIMITER_DURATION: number = parseInt(process.env.REDIS_OPT_LIMITER_DURATION || "3000", 10);
