const dotenv = require('dotenv');
const express = require("express");
const path = require("path");
const app = express();

// Carrega variáveis de ambiente explicitamente do arquivo .env específico
dotenv.config({ path: path.resolve(__dirname, ".env") });

const PORT = process.env.FRONTEND_PORT || 3001;

//simple express server to run frontend production build;
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
// Iniciar o servidor e exibir uma mensagem ao iniciar
app.listen(PORT, function () {
	console.log(`Frontend rodando em: http://localhost:${PORT}`);
});