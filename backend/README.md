# Backend API - Node.js + Express

Backend REST API construido con Node.js, Express y MongoDB.

## 🚀 Características

- ✓ REST API con Express
- ✓ Autenticación JWT
- ✓ Base de datos MongoDB con Mongoose
- ✓ Encriptación de contraseñas con bcryptjs
- ✓ Middlewares de seguridad (helmet, cors)
- ✓ Validación de datos
- ✓ Manejo de errores centralizado
- ✓ Estructura MVC

## 📦 Instalación

```bash
npm install
```

## 🔧 Configuración

1. Crear archivo `.env` basado en `.env.example`:

```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/practica-ia
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

2. Asegurar que MongoDB está corriendo:

```bash
# En otra terminal
mongod
```

## 🏃 Ejecución

### Desarrollo (con nodemon)
```bash
npm run dev
```

### Producción
```bash
npm start
```

## 📚 Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/validate` - Validar token

### Usuarios
- `GET /api/users/profile` - Obtener perfil del usuario (protegido)
- `PUT /api/users/profile` - Actualizar perfil (protegido)
- `DELETE /api/users/profile` - Eliminar cuenta (protegido)
- `GET /api/users` - Obtener todos los usuarios (protegido)

## 🔐 Autenticación

Se utiliza JWT (JSON Web Tokens). Para acceder a rutas protegidas, incluir el token en el header:

```
Authorization: Bearer <token>
```

## 📋 Estructura del Proyecto

```
backend/
├── src/
│   ├── index.js              # Punto de entrada
│   ├── config/
│   │   └── database.js       # Configuración de MongoDB
│   ├── models/
│   │   └── User.js           # Modelo de usuario
│   ├── controllers/
│   │   ├── authController.js # Lógica de autenticación
│   │   └── userController.js # Lógica de usuarios
│   ├── routes/
│   │   ├── auth.routes.js    # Rutas de autenticación
│   │   └── user.routes.js    # Rutas de usuarios
│   ├── middlewares/
│   │   ├── auth.js           # Middleware JWT
│   │   └── errorHandler.js   # Manejo de errores
│   └── services/
│       └── authService.js    # Servicios de autenticación
├── package.json
├── .env.example
└── README.md
```

## 🧪 Testing

```bash
npm test
```

## 📝 Licencia

MIT
