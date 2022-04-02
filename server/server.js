const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log("Listening on Port "+PORT));

app.use(express.static(path.resolve(__dirname,'../client')));