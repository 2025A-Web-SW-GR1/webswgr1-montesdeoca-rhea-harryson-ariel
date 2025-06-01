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

function escribirArchivo(ruta, contenidoPrevio) {
    const fecha = new Date().toString();
    const contenidoFinal = `${contenidoPrevio} ${fecha}`;

    return new Promise((resolve, reject) => {
        fs.writeFile(ruta, contenidoFinal, (err) => {
            if (err) {
                reject(`Error al escribir en el archivo: ${err}`);
            } else {
                resolve('Archivo actualizado correctamente.');
            }
        });
    });
}

const archivo = './a.txt';

leerArchivo(archivo)
    .then(contenido => {
        console.log('Contenido original:', contenido);
        return escribirArchivo(archivo, contenido);
    })
    .then(mensaje => {
        console.log(mensaje);
        return leerArchivo(archivo);
    })
    .then(nuevoContenido => {
        console.log('Contenido final en el archivo:', nuevoContenido);
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
    });
