const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
const { engine } = require('express-handlebars');

const port = process.env.PORT || 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));
//---------------------- engine configuration -------------------------
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials')
}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');
//---------------------- engine configuration -------------------------
app.use('/', router);

const server = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
}
);
server.on("error", error => { console.log(error) });




