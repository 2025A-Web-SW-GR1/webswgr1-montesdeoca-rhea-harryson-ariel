const fs = require('fs'); 
console.log("Primero");

// fs.readFile(
//     './a.txt',
//     'utf-8',
//     (errorLectura, contenido) => {
//         if(errorLectura){
//             console.error('ERROR lectura 1');
//         }else{
//             console.log('TERCERO 1.1', contenido)
//         }
//     }
// );

fs.writeFile(
    './a.txt', 
    'Hola! ' + new Date().toString(),
    (errorEscritura) => { 
        if(errorEscritura){
            console.error('ERROR escritura');
        }else{
            console.log('Archivo escrito');
        }
    }
);
console.log("Segundo");