# session-5

## Descripción

Este es un proyecto de práctica backend en Node.js, desarrollado por Sergio I Zuniga. El proyecto está diseñado para gestionar empleados, permitiendo realizar diversas operaciones a través de una interfaz web.

## Instalación

1. Clona el repositorio a tu máquina local.
   ```bash
   git clone https://github.com/SzunigaDev/backend/
   ```
2. Navega al directorio del proyecto.
   ```bash
   cd final
   ```
3. Instala las dependencias del proyecto.
   ```bash
   npm install
   ```

## Configuración de la Base de Datos

Este proyecto utiliza MySQL como sistema de gestión de bases de datos. Asegúrate de tener MySQL instalado y configurado en tu máquina.

1. Crea una base de datos llamada employees:
   ```sql
   CREATE DATABASE employees;
   ```
2. Crea una tabla llamada employees con los siguientes campos:

   ```sql
   CREATE TABLE employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      hire_date DATE NOT NULL,
      salary DECIMAL(10, 2) NOT NULL
   );

   ```

## Uso

1. Inicia el servidor.
   ```bash
   npm start
   ```
2. Accede a la aplicación en tu navegador web en `http://localhost:3000`.

## Dependencias

- `bootstrap`: ^5.3.3
- `datatables.net-dt`: ^2.0.8
- `express`: ^4.19.2
- `jquery`: ^3.7.1
- `mysql`: ^2.18.1
- `nodemon` (desarrollo): ^3.1.3

## Scripts

- `start`: Inicia el servidor con `nodemon`.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Envía tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
