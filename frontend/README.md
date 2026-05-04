# Frontend React - Practica IA

Frontend moderno construido con React 18, Hooks, Context API y Tailwind CSS.

## 🚀 Características

- ✓ React 18 con Hooks
- ✓ Context API para manejo de estado
- ✓ Tailwind CSS para estilos
- ✓ React Router para navegación
- ✓ Axios para consumo de APIs
- ✓ Autenticación JWT
- ✓ Componentes reutilizables
- ✓ Responsive Design

## 📦 Instalación

```bash
npm install
```

## 🔧 Configuración

1. Crear archivo `.env` basado en `.env.example`:

```bash
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Practica IA
```

## 🏃 Ejecución

### Desarrollo
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:3000`

### Build para Producción
```bash
npm run build
```

### Preview de Build
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navegación principal
│   │   ├── Footer.jsx        # Pie de página
│   │   ├── Layout.jsx        # Diseño principal
│   │   ├── Button.jsx        # Botón reutilizable
│   │   ├── Input.jsx         # Input reutilizable
│   │   └── Card.jsx          # Tarjeta reutilizable
│   ├── pages/
│   │   ├── Home.jsx          # Página de inicio
│   │   ├── Login.jsx         # Página de login
│   │   ├── Register.jsx      # Página de registro
│   │   ├── Profile.jsx       # Perfil de usuario
│   │   └── NotFound.jsx      # Error 404
│   ├── context/
│   │   └── AuthContext.jsx   # Context de autenticación
│   ├── hooks/
│   │   └── useAuth.js        # Hook para autenticación
│   ├── services/
│   │   ├── api.js            # Cliente Axios configurado
│   │   └── userService.js    # Servicio de usuarios
│   ├── styles/
│   │   └── index.css         # Estilos globales
│   ├── App.jsx               # Componente raíz
│   └── main.jsx              # Punto de entrada
├── tailwind.config.js        # Configuración de Tailwind
├── postcss.config.js         # Configuración de PostCSS
├── vite.config.js            # Configuración de Vite
├── package.json
├── .env.example
└── README.md
```

## 🔗 Integración con Backend

El frontend se conecta al backend mediante:

- **URL Base**: `http://localhost:5000/api`
- **Autenticación**: JWT en header `Authorization: Bearer <token>`
- **Token Storage**: LocalStorage (`token`)

## 🎨 Personalización de Tailwind

Edita `tailwind.config.js` para cambiar:
- Colores principales
- Breakpoints
- Fuentes
- Temas

## 📚 Hooks Disponibles

### useAuth
```javascript
const { user, token, isAuthenticated, login, register, logout } = useAuth()
```

## 📝 Licencia

MIT
