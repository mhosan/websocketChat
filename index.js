const express = require('express');
const Contenedor = require('./claseContenedor');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
server.on("error", error => { console.log(error) });

const version = "15";
app.use(express.static("public"));
const productosPath = path.join(__dirname, 'productos.json');
const contenedor = new Contenedor(productosPath);

app.get('/productos', (req, res) => {
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

app.post('/users', (req, res) => {
    console.log('POST /api/users respondiendo');
    if (Object.entries(req.body).length === 0) {
        res.status(400).json({ msg: 'No se recibieron datos' });
    } else {
        res.json({ msg: `Respuesta al post desde la versión: ${version}: ${req.body}` });
    }

});