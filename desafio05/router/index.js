const { Router } = require('express');
const router = Router();
const path = require('path');

const productos = [
    { title: "Lapiz", price: 125, thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ambientum.com%2Fwp-content%2Fuploads%2F2019%2F09%2Flapiz-696x348.png&imgrefurl=https%3A%2F%2Fwww.ambientum.com%2Fambientum%2Fciencia%2Fcomo-se-fabrica-un-lapiz.asp&tbnid=lj0cR3tjd0iHUM&vet=12ahUKEwj4gvbx-rX4AhUfN7kGHWWVCFQQMygBegUIARDjAQ..i&docid=4OSXyN18I4OI0M&w=696&h=348&q=lapiz&ved=2ahUKEwj4gvbx-rX4AhUfN7kGHWWVCFQQMygBegUIARDjAQ" },
    { title: "Goma de borrar", price: 80, thumbnail: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1086%2F1234%2Fproducts%2F005813907-400x400_grande.jpg%3Fv%3D1579739668&imgrefurl=https%3A%2F%2Flibreriaoasis.com.ar%2Fproducts%2F461-1710&tbnid=XyzR-34F4f8QLM&vet=12ahUKEwi4rM2u-7X4AhXVOLkGHfWuAx4QMygBegUIARDkAQ..i&docid=nLC_thOpAVQw-M&w=400&h=400&q=goma%20de%20borrar&ved=2ahUKEwi4rM2u-7X4AhXVOLkGHfWuAx4QMygBegUIARDkAQ" },
    { title: "Sacapuntas", price: 225, thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd0%2FSacapuntametalico.gif&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FSacapuntas&tbnid=4CcjmUBuebj7aM&vet=12ahUKEwiLp6rX-7X4AhUfM7kGHfMlD4sQMygBegUIARDqAQ..i&docid=3JQLzAXlbP-_QM&w=400&h=366&q=sacapuntas&ved=2ahUKEwiLp6rX-7X4AhUfM7kGHfMlD4sQMygBegUIARDqAQ" }
];

/* router.get('/productos', (req, res) => {
    console.log('GET /de productos respondiendo');
    res.json(productos);
}
);
 */
router.get('/product/:indice', (req, res) => {
    console.log('GET /de productos por id respondiendo');
    const id = req.params.indice;
    //const producto = productos.find(p => p.id === Number(id));
    //res.json(producto);
    res.render('products', productos[id]);
}
);

/* router.post('/productos', (req, res) => {
    console.log('POST /api/users respondiendo con el usuario');
    if (Object.entries(req.body).length === 0) {
        res.status(400).json({ msg: 'No se recibieron datos' });
    } else {
        const { title, author, price, thumbnail } = req.body;
        id = productos.length + 1;
        productos.push({ id, title, author, price, thumbnail });
        res.json({ id, title, author, price, thumbnail });
    }
});
 */

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