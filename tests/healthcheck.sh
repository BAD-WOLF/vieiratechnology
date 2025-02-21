#!/bin/bash
sleep 5
# Testando portas
nc -zv localhost 3001 &&>/dev/null
if [ $? -ne 0 ]; then
  echo "❌ Porta 3001 não subiu"
  exit 1
fi

nc -zv localhost 4001 &&>/dev/null
if [ $? -ne 0 ]; then
  echo "❌ Porta 4001 não subiu"
  exit 1
fi

exit 0
