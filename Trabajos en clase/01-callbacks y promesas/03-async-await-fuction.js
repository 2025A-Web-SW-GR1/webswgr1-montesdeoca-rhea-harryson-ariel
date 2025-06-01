/*
    Consigna del trabajo en clase:
    Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle al contenido actual del archivo + la fecha (toString) al final.
*/

const fs = require('fs');

function leerArchivo(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (err, data) => {
            if (err) {
                reject(`Error al leer el archivo: ${err}`);
            } else {
                resolve(data);
            }
        });
    });
}

function escribirArchivo(ruta, contenidoAnterior) {
    const fechaActual = new Date().toString();
    const nuevoContenido = `${contenidoAnterior} ${fechaActual}`;

    return new Promise((resolve, reject) => {
        fs.writeFile(ruta, nuevoContenido, (err) => {
            if (err) {
                reject(`Error al escribir en el archivo: ${err}`);
            } else {
                resolve('Archivo actualizado correctamente.');
            }
        });
    });
}

const archivo = './a.txt';

async function procesarArchivo() {
    try {
        const contenidoInicial = await leerArchivo(archivo);
        console.log('Contenido original:', contenidoInicial);

        const mensaje = await escribirArchivo(archivo, contenidoInicial);
        console.log(mensaje);

        const contenidoFinal = await leerArchivo(archivo);
        console.log('Contenido actualizado:', contenidoFinal);
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

procesarArchivo();
