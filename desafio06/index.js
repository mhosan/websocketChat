const express = require('express');
const app = express();
const router = require('./src/router/index');
const path = require('path');

const port = process.env.PORT || 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));
//---------------------- view engine configuration -------------------------
app.set('views', path.join(__dirname,'./src/views'));
app.set('view engine', 'ejs');
//---------------------- view engine configuration -------------------------
app.use('/', router);

const server = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
}
);
server.on("error", error => { console.log(error) });




