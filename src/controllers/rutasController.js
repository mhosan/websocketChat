
const productosArray = [
    { nombre: "Lapiz", precio: 125, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-128.png" },
    { nombre: "Juego de reglas", precio: 80, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png" },
    { nombre: "Calculadora", precio: 225, thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png" },
    { nombre: "Mochila", precio: 345, thumbnail: "https://cdn-icons-png.flaticon.com/128/2333/2333041.png"},
    { nombre: "Marcadores", precio: 234, thumbnail: "https://cdn-icons-png.flaticon.com/128/4697/4697386.png"}
];

const routerInitView = (req, res) =>{
    console.log('Vista inicial');
    try {
        console.log('muestra formulario de carga');
        res.render('main.ejs',{
            titulo: 'Desafio 05',
            estilo: 'color: red;',
            subtitulo: 'Listado de productos',
            productosArray,
            getAll: false
        });
    } catch(error) {
        res.status(500).json({ msg: `Error al cargar la página: ${error}` });
    }

};

const routerController = (req, res) => {
    try {
        console.log('muestra formulario de carga');
        res.render('main.ejs',{
            titulo: 'Desafio 05',
            estilo: 'color: red;',
            subtitulo: 'Listado de productos',
            productosArray,
            getAll: false
        });
    } catch(error) {
        res.status(500).json({ msg: `Error al cargar la página: ${error}` });
    }
}
const routerControllerGetAll = (req, res) => {
    console.log('mostrar total de productos cargados');
    try {
        res.render('main.ejs',{
            titulo: 'Desafio 05',
            estilo: 'color: red;',
            subtitulo: 'Listado de productos',
            productosArray,
            getAll: true
        });
    } catch(error) {
        res.status(500).json({ msg: `Error al cargar la página: ${error}` });
    }
}

const routerControllerPost = (req, res) => {
    console.log('POST para cargar productos');
    try {
        console.log('post de carga de datos');
        const { nombre, precio, thumbnail } = req.body;
        id = productosArray.length + 1;
        productosArray.push({ id, nombre, precio, thumbnail });
        res.redirect('/productos');
    } catch(error) {
        res.status(500).json({ msg: `Error al cargar la página: ${error}` });
    }
}

module.exports = { 
    routerInitView,
    routerController,
    routerControllerGetAll,
    routerControllerPost
};

