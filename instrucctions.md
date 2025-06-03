//BORRAMOS TODO EL DIRECTORIO

//WINDOWS
Remove-Item -Recurse -Force .\qbid-control

//MAC
rm -rf qbid-control

//CREAMOS NUEVO PROYECTO
npm create vite@latest qbid-control -- --template react-ts
cd qbid-control
npm install

//INSTALACION DE TAILWIND
npm install -D tailwindcss postcss autoprefixer //OJO!, Esta versión todavía no instala el ejecutable Por eso instalamos la 3, pasa esto porque tailwind 4 está orientado a trabajar todavía con CDN, y no orientado a Vite o Node

//INSTALACION DE TAILWIND 3
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p // PARA CREAR TAILWIND.CONFIG.JS y POSTCSS.CONFIG.JS


//COMPROBAMOS QUE TENEMOS LOS ARCHIVOS
tailwind.config.js
postcss.config.js
src/index.css 

//MODIFICAMOS tailwind.config.js

// SI TENEMOS ERRORES cambiamos postcss.config.js ================> a == postcss.config.cjs
REINICIAMOS TYPESCRIPT CON ========> Crtl + Shift + P ========= TypeScript:Restart TS server
npn run dev...

//tsconfig.json tiene que quedar así para poder importar shaDcn. 

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src", "vite.config.ts"]
}

///// INSTALAMOS SHADCN

npx shadcn@latest init

//// PARA EL MANEJO DE POSIBLES ERRORES

 npm install -D typescript @types/react @types/react-dom

React + Vite:   Renderizado rápido, estructura modular moderna
Node.js: 	    Entorno de ejecución para todo el ecosistema JavaScript
Tailwind CSS:   Framework para poder utilizar librerias de componentes como shaDcn
PostCSS:        Requisito de Tailwind, correctamente configurado
ShadCN UI:      Componentes UI modernos con acceso directo a Radix UI (la parte más divertida)
TypeScript:     Soporte completo para JSX y TSX, con configuración correcta (tsconfig.json) y npm install -D typescript @types/react @types/react-dom
Alias @/:       Importaciones limpias y sin erroresReact + Vite	
Vite:           Renderizado en pantalla en tiempo real, estructura modular moderna
Node.js:        Entorno de ejecución para todo nuestro ecosistema

// buscamos un bloque de shadcn por ejemplo... https://ui.shadcn.com/blocks/login

// npx shadcn@latest add login-01

// y nos instala los siguientes componentes

src\components\login-form.tsx
src\components\ui\button.tsx
src\components\ui\card.tsx
src\components\ui\input.tsx
src\components\ui\label.tsx