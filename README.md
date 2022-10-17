## Descripción del proyecto
A continuación, te presentamos nuestra prueba técnica para ingresar al
equipo de backend.
Deberás resolverla antes de 5 horas de recibir este mensaje. ¡Muchos
éxitos!
1. Deberás de desarrollar un API REST con las siguientes
funcionalidades:
a. Registro de usuario.
b. Login de usuario.
c. Crear un endpoint para los usuarios logueados el cual reciba
una ciudad (o unas coordenadas) y retorne una lista de los
restaurantes cercanos a esta ciudad o coordenadas. Puedes
utilizar algún API público para esto.
d. Crear un endpoint donde puedes consultar la lista de las
transacciones realizadas históricamente.
e. Logout de usuario.
2. Bono si todo se puede correr localmente desde docker con
docker-compose.
3. Recuerda que puedes utilizar cualquier lenguaje de programación
moderno y cualquier framework que conozcas. Nuestro equipo utiliza
Node JS entonces puntos extra si es en este lenguaje.

## Variables de entorno para ambiente local
Copiar el archivo .env que contiene las variables de entorno que viene adjunto al correo en la carpeta raiz, como se evidencia en la siguiente imagen.

.env

![image](https://user-images.githubusercontent.com/4341814/196072924-6964cf86-5377-49e7-88b7-4607a4405b15.png)


## Instalación de dependencis y despliegue del servidor

```sh
npm i
node start
```
## Pruebas del Api

Abrir una sesión en la aplicación Postman para hacer el llamado de la Api, como se muestra en la image.
<img width="472" alt="image" src="https://user-images.githubusercontent.com/4341814/196072825-d555e35e-0fdc-4024-9931-5c9c219a4839.png">
