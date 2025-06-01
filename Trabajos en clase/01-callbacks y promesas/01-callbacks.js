/*
    Consigna del trabajo en clase:
    Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle al contenido actual del archivo + la fecha (toString) al final.
*/

const fs = require('fs'); 

fs.readFile('./a.txt', 'utf-8', (errRead, dataOriginal) => {
    if (errRead) {
        console.error('Error al leer el archivo:', errRead);
        return;
    }

    console.log('Contenido original:', dataOriginal);

    const fechaActual = new Date().toString();
    const nuevoContenido = `${dataOriginal} ${fechaActual}`;

    fs.writeFile('./a.txt', nuevoContenido, (errWrite) => {
        if (errWrite) {
            console.error('Error al escribir en el archivo:', errWrite);
            return;
        }

        console.log('Archivo actualizado correctamente.');

        fs.readFile('./a.txt', 'utf-8', (errReadFinal, dataFinal) => {
            if (errReadFinal) {
                console.error('Error al leer el archivo actualizado:', errReadFinal);
                return;
            }

            console.log('Contenido final en el archivo:', dataFinal);
        });
    });
});
