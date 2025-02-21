# Espera 2s antes de começar os testes para que o nginx suba as portas
sleep 3

# Testando Portas
nc -zv localhost 80 &&>/dev/null
if [ $? -ne 0 ]; then
    echo "❌ A porta 80 (HTTP) não está respondendo. Verificar o Nginx aqui nesse conteiner"
    exit 1
fi

nc -zv app 3001 &&>/dev/null
if [ $? -ne 0 ]; then
  echo "❌ A porta 3001 (frontend) não está respondendo. Verificar o nodejs service (app)"
  exit 1
fi

nc -zv app 4001 &&>/dev/null
if [ $? -ne 0 ]; then
  echo "❌ A porta 4001 (backend) não está respondendo. Verificar o nodejs service (app)"
  exit 1
fi

echo "🚀 frontend e backend está ativo e respondendo nas portas 3001 e 4001. Tudo certo!"

# Executa o Certbot
echo "🚀 Iniciando Certbot..."
certbot -m deploy@deploy.com --nginx --agree-tos --non-interactive --domains api.vieiratechnology.shop
if [ $? -ne 0 ]; then
  echo "Certbot do back ❌"
  exit 1
fi

echo "Certbot do back OK! ✔️"

certbot -m deploy@deploy.com --nginx --agree-tos --non-interactive --domains painel.vieiratechnology.shop
if [ $? -ne 0 ]; then
  echo "Certbot do front ❌"
  exit 1
fi

echo "Certbot do front OK! ✔️"

exit 0
