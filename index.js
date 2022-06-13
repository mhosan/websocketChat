const express = require('express');
const path = require('path');
const router = require('./router');

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
app.use('/api', router);




