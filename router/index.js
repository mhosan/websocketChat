const { Router } = require('express');
const router = Router();
const Contenedor = require('../claseContenedor');
const path = require('path');

const productosPath = path.join(__dirname, 'productos.json');
const contenedor = new Contenedor(productosPath);

router.get('/productos', (req, res) => {
    console.log('GET /productos respondiendo');
    contenedor.getAll()
        .then(data => {
            res.json(data);
        }
        ).catch(err => {
            res.send(err);
        }
        );
});

router.post('/users', (req, res) => {
    console.log('POST /api/users respondiendo');
    if (Object.entries(req.body).length === 0) {
        res.status(400).json({ msg: 'No se recibieron datos' });
    } else {
        res.json({ datos: req.body });
    }

});
const personas =[];
const mascotas = [];

router.get('/personas', (req, res) => {
    res.json(personas);
}
);
router.get('/mascotas', (req, res) => {
    res.json(mascotas);
}
);

router.post('/personas', (req, res) => {
    const {nombre, apellido, edad} = req.body;
    personas.push({nombre, apellido, edad});
    res.sendStatus(201);
}
);

router.post('/mascotas', (req, res) => {
    const {nombre, raza, edad} = req.body;
    mascotas.push({nombre, raza, edad});
    res.sendStatus(201);
}
);


module.exports = router;