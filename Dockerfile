# Usa una imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Instala TypeScript globalmente
RUN npm install -g typescript

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Compila el código TypeScript
RUN tsc

# Expone el puerto en el que la aplicación escuchará
EXPOSE 4000

# Define el comando de inicio de la aplicación
CMD ["node", "dist/index.js"]
