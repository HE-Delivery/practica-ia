# Practica IA - Proyecto Fullstack

Proyecto fullstack completo con **Backend Node.js + Express** y **Frontend React** para practicar desarrollo web moderno.

## 📋 Descripción General

Este proyecto implementa una aplicación web completa con:
- **Backend**: REST API con autenticación JWT
- **Frontend**: SPA interactivo con React Hooks
- **Base de Datos**: MongoDB para persistencia de datos

## 📁 Estructura del Proyecto

```
practica-ia/
├── backend/                  # API REST con Node.js y Express
│   ├── src/
│   │   ├── index.js         # Punto de entrada
│   │   ├── config/          # Configuración (BD, etc)
│   │   ├── models/          # Modelos de Mongoose
│   │   ├── controllers/     # Lógica de negocio
│   │   ├── routes/          # Definición de rutas
│   │   ├── middlewares/     # Middlewares personalizados
│   │   └── services/        # Servicios y utilidades
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── frontend/                 # SPA con React y Tailwind
│   ├── src/
│   │   ├── pages/           # Páginas/vistas
│   │   ├── components/      # Componentes reutilizables
│   │   ├── context/         # Context API
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # Servicios (API, etc)
│   │   ├── styles/          # Estilos globales
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── backend-nodejs-expert.md  # Guía de experto backend
├── frontend-react-expert.md  # Guía de experto frontend
└── README.md                 # Este archivo
```

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 16+ y npm
- MongoDB (local o atlas)

### Backend

```bash
cd backend

# Instalar dependencias
npm install

# Crear archivo .env
cp .env.example .env

# Editar .env con tus configuraciones
# MONGODB_URI=mongodb://localhost:27017/practica-ia
# JWT_SECRET=tu_clave_secreta

# Iniciar en desarrollo
npm run dev

# El servidor correrá en http://localhost:5000
```

### Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Crear archivo .env
cp .env.example .env

# Iniciar en desarrollo
npm run dev

# La app se abrirá en http://localhost:3000
```

## 🔐 Autenticación

El sistema usa **JWT (JSON Web Tokens)**:

1. **Registro**: POST `/api/auth/register`
2. **Login**: POST `/api/auth/login`
3. **Token**: Se almacena en localStorage
4. **Requests protegidos**: Header `Authorization: Bearer <token>`

## 📚 Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/validate` - Validar token

### Usuarios
- `GET /api/users/profile` - Obtener perfil (protegido)
- `PUT /api/users/profile` - Actualizar perfil (protegido)
- `DELETE /api/users/profile` - Eliminar cuenta (protegido)
- `GET /api/users` - Listar usuarios (protegido)

### Health
- `GET /api/health` - Estado del servidor

## 🛠️ Tecnologías

### Backend
- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación
- **bcryptjs** - Encriptación de contraseñas
- **Helmet** - Seguridad HTTP
- **CORS** - Manejo de cross-origin

### Frontend
- **React 18** - Librería UI
- **React Router** - Navegación
- **Context API** - State management
- **Hooks** - Lógica reutilizable
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Utilidades CSS
- **Vite** - Build tool

## 📖 Guías de Referencia

- [Guía Backend Node.js Expert](./backend-nodejs-expert.md)
- [Guía Frontend React Expert](./frontend-react-expert.md)
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

## 💡 Características Implementadas

### Backend
✅ REST API con Express
✅ Autenticación JWT
✅ Encriptación de contraseñas
✅ Validación de datos
✅ Manejo de errores centralizado
✅ CORS habilitado
✅ Middlewares de seguridad
✅ Estructura MVC

### Frontend
✅ React Hooks
✅ Context API para estado global
✅ Rutas con React Router
✅ Componentes reutilizables
✅ Tailwind CSS styling
✅ Consumo de APIs
✅ Manejo de autenticación
✅ Responsive design

## 🧪 Testing

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 🔄 Flujo de Desarrollo

1. **Registro/Login** → Usuario crea cuenta o inicia sesión
2. **Token JWT** → Backend genera y envía token
3. **Requests Autenticados** → Frontend incluye token en headers
4. **Profile** → Usuario puede ver y actualizar su información
5. **Logout** → Token se elimina del localStorage

## 📝 Variables de Entorno

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/practica-ia
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Practica IA
```

## 🚨 Troubleshooting

### "Cannot connect to MongoDB"
- Verificar que MongoDB está corriendo: `mongod`
- Revisar la URI en `.env`

### "CORS Error"
- Verificar `CORS_ORIGIN` en backend `.env`
- Debe coincider con URL del frontend

### "Token expired"
- Token expira tras 7 días (configurable)
- Usuario debe login nuevamente

### "Port already in use"
- Backend: cambiar `PORT` en `.env`
- Frontend: `npm run dev -- --port 3001`

## 🤝 Contribuciones

Este es un proyecto de práctica. Siéntete libre de:
- Agregar nuevas funcionalidades
- Mejorar la UI/UX
- Optimizar el código
- Agregar tests

## 📝 Licencia

MIT

## 🎯 Próximos Pasos

- [ ] Agregar más validaciones
- [ ] Implementar refresh tokens
- [ ] Agregar tests completos
- [ ] Mejorar manejo de errores
- [ ] Agregar logs
- [ ] Implementar rate limiting
- [ ] Agregar documentación API (Swagger)
- [ ] Deploy a producción

---

**¡Feliz coding!** 🚀
