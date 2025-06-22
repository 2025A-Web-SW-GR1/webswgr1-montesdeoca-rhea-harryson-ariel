# Examen I Bimestre - Aplicación Web con NestJS

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con NestJS para el Examen del I Bimestre. La aplicación implementa un controlador para la gestión de casas con operaciones básicas de consulta.

## 🛠️ Tecnologías Utilizadas

- **NestJS** v11.0.1 - Framework de Node.js para aplicaciones del lado del servidor
- **TypeScript** - Superset tipado de JavaScript
- **ESLint** - Herramienta de análisis de código estático
- **Jest** - Framework de testing
- **Prettier** - Formateador de código

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### 1. Instalar dependencias

```bash
# Instalar todas las dependencias del proyecto
npm install

# O usando yarn
yarn install
```

### 2. Verificar la instalación

```bash
# Verificar que NestJS CLI esté disponible
npx @nestjs/cli --version
```

## 🚀 Comandos de Desarrollo

### Iniciar el servidor

```bash
# Modo desarrollo (con hot reload)
npm run start:dev

# Modo producción
npm run start:prod

# Modo debug
npm run start:debug
```

El servidor se ejecutará en `http://localhost:3000`

### Verificar calidad de código

```bash
# Ejecutar ESLint para análisis de código
npm run lint

# Formatear código con Prettier
npm run format

# Construir el proyecto
npm run build
```

### Testing

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas en modo watch
npm run test:watch

# Ejecutar pruebas con cobertura
npm run test:cov

# Ejecutar pruebas end-to-end
npm run test:e2e
```

## 🏠 API Endpoints - Controlador Casa

El controlador `CasaController` maneja las operaciones relacionadas con las casas en la aplicación.

### Base URL
```
http://localhost:3000/casa
```

### Endpoints Disponibles

#### 1. Obtener todas las casas
- **Método:** GET
- **URL:** `/casa`
- **Descripción:** Retorna la lista completa de casas disponibles
- **Código de respuesta:** 200 OK

**Ejemplo de solicitud:**
```bash
curl -X GET http://localhost:3000/casa
```

**Respuesta exitosa:**
```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "nombre": "Casa 1"
    },
    {
      "id": 2,
      "nombre": "Casa 2"
    }
  ]
}
```

#### 2. Obtener casa por ID
- **Método:** GET
- **URL:** `/casa?idCasa={id}`
- **Descripción:** Retorna una casa específica filtrada por su ID
- **Parámetros de consulta:**
  - `idCasa` (string): ID de la casa a buscar
- **Código de respuesta:** 
  - 200 OK (casa encontrada)
  - 404 Not Found (casa no encontrada)

**Ejemplo de solicitud exitosa:**
```bash
curl -X GET "http://localhost:3000/casa?idCasa=1"
```

**Respuesta exitosa:**
```json
{
  "statusCode": 200,
  "data": {
    "id": 1,
    "nombre": "Casa 1"
  }
}
```

**Ejemplo de solicitud con casa no encontrada:**
```bash
curl -X GET "http://localhost:3000/casa?idCasa=999"
```

**Respuesta de error:**
```json
{
  "statusCode": 404,
  "message": "No se encuentra"
}
```

## 🧪 Pruebas de la API

### Usando curl (línea de comandos)

```bash
# Obtener todas las casas
curl -X GET http://localhost:3000/casa

# Obtener casa con ID 1
curl -X GET "http://localhost:3000/casa?idCasa=1"

# Obtener casa con ID 2
curl -X GET "http://localhost:3000/casa?idCasa=2"

# Probar con ID inexistente
curl -X GET "http://localhost:3000/casa?idCasa=999"
```

### Usando navegador web

- Todas las casas: http://localhost:3000/casa
- Casa específica: http://localhost:3000/casa?idCasa=1

## 📋 Formato de Respuestas de la API

La API implementa un formato estructurado y consistente para todas las respuestas:

### Respuestas Exitosas (Status 200)
Todas las respuestas exitosas siguen el formato:
```json
{
  "statusCode": 200,
  "data": [objeto o array con los datos solicitados]
}
```

### Respuestas de Error (Status 404)
Todas las respuestas de error siguen el formato:
```json
{
  "statusCode": 404,
  "message": "Descripción del error"
}
```

### Ejemplos de Respuestas

**GET /casa** (todas las casas):
```json
{
  "statusCode": 200,
  "data": [
    { "id": 1, "nombre": "Casa 1" },
    { "id": 2, "nombre": "Casa 2" }
  ]
}
```

**GET /casa?idCasa=1** (casa específica):
```json
{
  "statusCode": 200,
  "data": {
    "id": 1,
    "nombre": "Casa 1"
  }
}
```

**GET /casa?idCasa=999** (casa no encontrada):
```json
{
  "statusCode": 404,
  "message": "No se encuentra"
}
```

## 📁 Estructura del Proyecto

```
src/
├── app.controller.ts      # Controlador principal de la aplicación
├── app.controller.spec.ts # Pruebas del controlador principal
├── app.module.ts          # Módulo raíz de la aplicación
├── app.service.ts         # Servicio principal
├── casa.controller.ts     # Controlador para gestión de casas
└── main.ts               # Punto de entrada de la aplicación
```

## 🔧 Características Implementadas

### Controlador Casa
- ✅ Endpoint para listar todas las casas
- ✅ Endpoint para buscar casa por ID
- ✅ Manejo de errores con NotFoundException
- ✅ Validación de parámetros de consulta
- ✅ Respuestas HTTP apropiadas (200, 404)
- ✅ Formato de respuesta estructurado con statusCode y data/message

### Formato de Respuestas
- ✅ **Respuestas exitosas**: `{ statusCode: 200, data: ... }`
- ✅ **Respuestas de error**: `{ statusCode: 404, message: "..." }`
- ✅ Consistencia en el formato JSON de todas las respuestas

### Calidad de Código
- ✅ Configuración de ESLint
- ✅ Configuración de Prettier
- ✅ TypeScript con tipado estricto
- ✅ Estructura modular de NestJS

## 📊 Evidencia de Funcionalidad

### Comandos de verificación ejecutados:

1. **Instalación de dependencias**: `npm install`
2. **Inicio del servidor**: `npm run start:dev`
3. **Verificación de lint**: `npm run lint`
4. **Pruebas de endpoints**:
   - GET /casa
   - GET /casa?idCasa=1
   - GET /casa?idCasa=2
   - GET /casa?idCasa=999 (error 404)

### Resultados esperados:
- ✅ Servidor iniciado correctamente en puerto 3000
- ✅ Endpoints respondiendo según especificaciones
- ✅ Manejo adecuado de errores
- ✅ Código sin errores de lint

## 👨‍💻 Autor

**Nombre del Estudiante**: Ariel Montesdeoca  
**Materia**: Aplicaciones Web  
**Período**: 2025-A  
**Examen**: I Bimestre

---

*Este README.md sirve como documentación técnica y evidencia de la resolución del examen del I Bimestre.*
