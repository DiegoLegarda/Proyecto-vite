# Cambia a la carpeta del frontend
cd .\Cliente

# Verifica si el puerto 5173 está ocupado y detiene el proceso si es necesario
$port5173 = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($port5173) {
    Write-Host "El puerto 5173 está ocupado. Deteniendo el proceso..."
    Stop-Process -Id $port5173.OwningProcess -Force
}

# Inicia el frontend en Vite
Start-Process "cmd" "/c npm run dev" -NoNewWindow
Start-Sleep -Seconds 5

# Verifica si el puerto 3000 está ocupado y detiene el proceso si es necesario
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "El puerto 3000 está ocupado. Deteniendo el proceso..."
    Stop-Process -Id $port3000.OwningProcess -Force
}

# Cambia a la carpeta del servidor de autenticación
cd "$HOME\Documents\Curso Full Stack Intermedio\ServidorEjemplo"
Start-Process "cmd" "/c npm start" -NoNewWindow
Start-Sleep -Seconds 5

# Verifica si el puerto 3002 está ocupado y detiene el proceso si es necesario
$port3002 = Get-NetTCPConnection -LocalPort 3002 -ErrorAction SilentlyContinue
if ($port3002) {
    Write-Host "El puerto 3002 está ocupado. Deteniendo el proceso..."
    Stop-Process -Id $port3002.OwningProcess -Force
}

# Cambia a la carpeta del servidor de imágenes
cd "$HOME\Documents\Curso Full Stack Intermedio\ServidorImagenes"
Start-Process "cmd" "/c npm start" -NoNewWindow

# Espera a que todos los servicios estén listos
# Asegúrate de tener wait-on instalado globalmente
wait-on http://localhost:3000 http://localhost:3002 http://localhost:5173

# Cambia a la carpeta del proyecto de Vite en el cliente
cd "$HOME\Documents\Curso Full Stack Intermedio\Proyecto vite\Cliente"
npx cypress open
