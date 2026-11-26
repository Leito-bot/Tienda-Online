# ProTecno | Tienda Online

Tienda online de insumos informáticos al por mayor, desarrollada con React como proyecto final de la cursada de React JS (Talento Tech, 2026).

🔗 **Demo:** https://TU-URL-DE-VERCEL.vercel.app
📦 **Repositorio:** https://github.com/Leito-bot/Tienda-Online

## 🔑 Acceso al panel de administración

| Usuario           | Contraseña |
| `admin@gmail.com` | `admin123` |

Ingresá desde **Ingresar** en el menú. Con este usuario aparece la sección **Admin**.

> Estas credenciales son públicas porque lo requiere la consigna. En una aplicación real nunca se publican.

## ✨ Funcionalidades

- **Catálogo** con datos desde Firebase Firestore, **búsqueda en tiempo real** (sin distinguir mayúsculas ni tildes) y **paginador**.
- **Detalle de producto** con rutas dinámicas (`/producto/:id`).
- **Carrito** con Context API: agregar, incrementar, decrementar, eliminar y vaciar, con control de stock y total.
- **Autenticación** con Firebase Authentication: login, registro y cierre de sesión.
- **Rutas protegidas**: el panel admin solo es accesible para el administrador.
- **Panel admin (CRUD)**: crear, editar y eliminar productos, con formulario controlado, validaciones y confirmación antes de eliminar.
- **Estados de carga y error** en todas las vistas que consultan datos.
- **Diseño responsive** y accesible (HTML semántico, navegación con teclado, atributos ARIA).

## 🛠️ Tecnologías

- React 19 + Vite
- React Router
- Context API
- Firebase (Firestore y Authentication)
- CSS Modules
- Deploy en Vercel

## 🔒 Seguridad

- Las **reglas de Firestore** permiten leer productos a cualquiera, pero crear, editar o eliminar **solo al administrador**, y validan los datos en el servidor (nombre obligatorio, precio mayor que cero, stock entero).
- La configuración de Firebase está en variables de entorno (`.env.local`), fuera del repositorio.

## 🚀 Instalación local

1. Clonar el repositorio e instalar dependencias:
   ```bash
   git clone https://github.com/Leito-bot/Tienda-Online.git
   cd Tienda-Online
   pnpm install
   ```
2. Crear un archivo `.env.local` en la raíz con la configuración de un proyecto de Firebase:
   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

## 📁 Estructura

```
src/
├── components/
│   ├── admin/      Formulario de productos
│   ├── auth/       Ruta protegida
│   ├── cart/       Ítem del carrito
│   ├── common/     Componentes reutilizables
│   ├── layout/     Header, NavBar, Footer, Layout
│   └── products/   Catálogo, detalle, buscador y paginador
├── context/        CarritoContext y AuthContext
├── firebase/       Configuración de Firebase
├── hooks/          useCarrito y useAuth
├── pages/          Vistas de cada ruta
├── services/       Acceso a Firestore (CRUD de productos)
└── utils/          Funciones auxiliares
```

## 👥 Equipo

- Leonel Rosso — Desarrollador
