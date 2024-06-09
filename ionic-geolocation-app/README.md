# GPS con guardado de datos

GPS con guardado de datos en real-time-database o firestore.
 
- APK: Descarga la [.apk](src/assets/app-debug.apk)

- Web: [GPS guardado de datos](https://gps-firebase-fce0f.web.app/)


## Cómo correr el proyecto ⌨️

Instala ionic

```bash
  npm i -g @ionic/cli 
```


Clonar el repositorio

```bash
  https://github.com/brittanypallasco2003/Portafolio_ionic.git
```

Ir al directorio de este proyecto

```bash
  cd ionic-geolocation-app
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor

```bash
  ionic serve
```


## Variables de Entorno ⚙️

Para correr este proyecto, necesitas añadir las siguientes variables de entorno a tu archivo **environment.ts**

```bash
firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  },
```

## Capturas del funcionamiento 📳

### Inicio de Sesión y Registro

|Pantalla implementada|Validación Inicio de Sesión|Validación Registro|
|:---|:---|:---|
|![Imagen de WhatsApp 2024-06-09 a las 11 55 05_5240fada](https://github.com/brittanypallasco2003/Portafolio_ionic/assets/117743650/b524afcd-70e1-496f-bab2-5431a323ec95)|![Imagen de WhatsApp 2024-06-09 a las 12 19 21_240b582d](https://github.com/brittanypallasco2003/Portafolio_ionic/assets/117743650/8dbf7f49-1ab6-4d4d-b7d7-e28f5de6f072)|![Imagen de WhatsApp 2024-06-09 a las 12 15 30_2f67f347](https://github.com/brittanypallasco2003/Portafolio_ionic/assets/117743650/2d439e02-826b-4479-8779-7ee468ad8f7d)|

### Ubicación almacenada en Firestore
|Colección Locations|
|-|
||







