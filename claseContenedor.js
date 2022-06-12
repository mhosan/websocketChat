const fs = require('fs');
class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        console.log(`desde la clase Contenedor: ${this.nombreArchivo}`);
    }
    async save(objeto) {
        try {
            let fileContents = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            let id = fileContents.length;
            objeto.id = id + 1;
            fileContents.push(objeto);
            console.log("\n".repeat(10) + "-".repeat(100) + "\n");
            console.log(`Id: ${objeto.id}, title: ${objeto.title}, author: ${objeto.author}, price: ${objeto.price}:   Guardado con exito!`);
            console.log("\n".repeat(1) + "-".repeat(100));
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(fileContents, null, 2));
        } catch (error) {
            console.log(`Clase Contenedor. Hubo un error: ${error}`);
        }
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    const objeto = JSON.parse(data).find(x => x.id == id);
                    resolve(objeto);
                }
            });
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    const objeto = JSON.parse(data);
                    resolve(objeto);
                }
            });
        });
    }
    deleteById(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let objeto = new Array();
                    objeto = JSON.parse(data);
                    const objetoAEliminar = objeto.find(x => x.id === id);
                    if (!objetoAEliminar) {
                        console.log(`No se encontro el objeto con id: ${id}`);
                    }
                    else {
                        const newObjeto = objeto.splice(objetoAEliminar.id - 1, 1);
                        fs.promises.writeFile(this.nombreArchivo, JSON.stringify(objeto, null, 2));
                        resolve(JSON.stringify(objetoAEliminar) + ' eliminado');
                    }
                }
            });
        });
    }
    deleteAll() {
        const objeto = [];
        fs.writeFile(this.nombreArchivo, JSON.stringify(objeto), (err, data) => {
            if (err) {
                console.log(`hubo un error: ${err}`);
            }
            else {
                console.log(`borrado con exito!`);
            }
        })
    }
}

module.exports = Contenedor;
/* 
const contenedor = new Contenedor('productos.json');
const jsonAGuardar = {
    "title": "Titanes",
    "author": "Juan Rulfo",
    "price": 12.99,
    "thumbnail": "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/350/original/portada_titanes_juan-rulfo_202203301151.jpg"
} */

//contenedor.save(jsonAGuardar);

/* contenedor.getById(5)
    .then(x => {
        if(x != undefined)
        {
            console.log(x)
        }
        else {
            console.log("No se encontro el libro");
        }
    })
    .catch(err=> console.log(`error: ${err}`));
 */

//contenedor.getAll().then(x => console.log(x));


//contenedor.deleteById(6).then(x => console.log(x));


//contenedor.deleteAll();