#!/bin/bash

# Inicia el frontend en Vite
cd Cliente
if lsof -i :5173; then
  echo "El puerto 5173 está ocupado. Deteniendo el proceso..."
  kill -9 $(lsof -t -i :5173)
fi
npm run dev &  


sleep 5

if lsof -i :3000; then
  echo "El puerto 3000 está ocupado. Deteniendo el proceso..."
  kill -9 $(lsof -t -i :3000)
fi

# Inicia el servidor de autenticacion
cd ~/Documentos/Curso\ Full\ Stack\ Intermedio/ServidorEjemplo
npm start &  

sleep 5

if lsof -i :3002; then
  echo "El puerto 3002 está ocupado. Deteniendo el proceso..."
  kill -9 $(lsof -t -i :3002)
fi


# Inicia el servidor de imagenes
cd ~/Documentos/Curso\ Full\ Stack\ Intermedio/ServidorImagenes
npm start &

# Espera a que todos los servicios estén listos
wait-on http://localhost:3000 http://localhost:3002 http://localhost:5173

# Iniciar cypress para pruebas
cd ~/Documentos/Curso\ Full\ Stack\ Intermedio/Proyecto\ vite/Cliente
npx cypress run
