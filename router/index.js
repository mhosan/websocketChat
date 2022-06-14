const { Router } = require('express');
const router = Router();
const path = require('path');

const productos = [];

router.get('/productos', (req, res) => {
    console.log('GET /productos respondiendo');
    res.json(productos);
}
);

router.get('/productos/:id', (req, res) => {
    console.log('GET /productos por id respondiendo');
    const id = req.params.id;
    const producto = productos.find(p => p.id === Number(id));
    res.json(producto);
}
);

router.post('/productos', (req, res) => {
    console.log('POST /api/users respondiendo');
    if (Object.entries(req.body).length === 0) {
        res.status(400).json({ msg: 'No se recibieron datos' });
    } else {
        const { title, author, price, thumbnail } = req.body;
        id = productos.length + 1;
        productos.push({ id, title, author, price, thumbnail });
        res.json({ id, title, author, price, thumbnail });
    }
});

router.put('/productos/:id', (req, res) => {
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

router.delete('/productos/:id', (req, res) => {
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

module.exports = router;