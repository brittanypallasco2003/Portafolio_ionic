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
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  },
```

## Capturas del funcionamiento 📳

### Pantalla para obtener localización

|Pantalla implementada|Obtención de ubicación|
|:---|:---|
|![image](https://github.com/brittanypallasco2003/Portafolio_ionic/assets/117743650/75a2d567-a204-4d4f-be25-948087b159f3)|![image](https://github.com/brittanypallasco2003/Portafolio_ionic/assets/117743650/2f418674-d2e2-4818-8df9-5424de4ff5d6)|


### Ubicación almacenada en Firestore
|Colección Locations|
|-|
|![image](https://github.com/brittanypallasco2003/Portafolio_ionic/assets/117743650/998a9560-3c4f-4477-a86e-fb6ebfc88a71)|







