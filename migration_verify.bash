#!/bin/bash

MIGRATED_FILE="./migrated.txt"

# Verifica se o arquivo de controle existe e contém 1
if [ -f "$MIGRATED_FILE" ] && [ "$(cat $MIGRATED_FILE)" == "1" ]; then
  echo "Migrações já foram aplicadas. Nenhuma ação necessária."
else
  echo "Executando migrações e seeds..."
  cd backend && npx sequelize db:migrate
  npx sequelize db:seed:all
  cd ..
  # Marca que as migrações foram aplicadas
  echo "1" > "$MIGRATED_FILE"
fi

pm2 start frontend/server.js --name vieiratechnology-frontend
pm2 start backend/dist/server.js --name vieiratechnology-backend
pm2 logs
