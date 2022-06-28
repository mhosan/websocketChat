const express = require('express');
const app = express();
const router = require('./router/index');
const path = require('path');
const { Server: IOServer } = require('socket.io');
const messagesArray = [];

const port = process.env.PORT || 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')));
//---------------------- view engine configuration -------------------------
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//---------------------- view engine configuration -------------------------
app.use('/', router);

const expressSserver = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
}
);
expressSserver.on("error", error => { console.log(error) });

const io = new IOServer(expressSserver);
io.on('connection', (socket) => {
    console.log(`Cliente conectado ${socket.id}`);
    socket.emit('server:message', messagesArray);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('client:message', (messageInfo) => {
        console.log(messageInfo)
        messagesArray.push(messageInfo);
        io.emit('server:message', messagesArray);
    });
}
);





