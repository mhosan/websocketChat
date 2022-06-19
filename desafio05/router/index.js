const { Router } = require('express');
const router = Router();
const path = require('path');

const productosArray = [
    { nombre: "Lapiz", precio: 125, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-128.png" },
    { nombre: "Juego de reglas", precio: 80, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png" },
    { nombre: "Calculadora", precio: 225, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png" },
    { nombre: "Mochila", precio: 345, thumbnail: "https://cdn-icons-png.flaticon.com/128/2333/2333041.png"},
    { nombre: "Marcadores", precio: 234, thumbnail: "https://cdn-icons-png.flaticon.com/128/4697/4697386.png"}
];

/* router.get('/product/:indice', (req, res) => {
    console.log('GET /de productos por id respondiendo');
    const id = req.params.indice;
    //const producto = productos.find(p => p.id === Number(id));
    //res.json(producto);
    res.render('products', productos[id]);
}
);
*/

router.get('/', (req, res) => {
    console.log('Pagina inicial. Mostrar carga de productos');
    res.render('productos', {showProductos: false});
}
);

router.get('/productos', (req, res) => {
    console.log('mostrar total de productos cargados');
    res.render('productos', {productosArray, showProductos: true});
}
);

router.post('/productos', (req, res) => {
    console.log('POST para cargar productos');
        const { nombre, precio, thumbnail } = req.body;
        id = productosArray.length + 1;
        productosArray.push({ id, nombre, precio, thumbnail });
});
 

/* router.put('/productos/:id', (req, res) => {
    console.log('PUT /productos/:id respondiendo');
    const id = req.params.id;
    const producto = productos.find(p => p.id === Number(id));
    if (producto) {
        const { title, author, price, thumbnail } = req.body;
        producto.title = title;
        producto.author = author;
        producto.price = price;
        producto.thumbnail = thumbnail;
        res.json(producto);
    } else {
        res.status(404).json({ msg: 'Producto no encontrado' });
    }
}
);
 */

/* router.delete('/productos/:id', (req, res) => {
    console.log('DELETE /productos/:id respondiendo');
    const id = req.params.id;
    const producto = productos.find(p => p.id === Number(id));
    if (producto) {
        productos.splice(productos.indexOf(producto), 1);
        res.json(producto);
    } else {
        res.status(404).json({ msg: 'Producto no encontrado' });
    }
}
);
 */
module.exports = router;