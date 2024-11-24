const express = require('express');
const phone = require('./phone.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Tolha - 2');
})

app.get('/phones', (req, res) => {
    res.send(`Your Total of Phone : ${phone.length}`);
})

app.get('/phones/:phoneId', (req, res) => {
    const id = parseInt(req.params.phoneId);
    const singlePhone = phone.find((p) => p.id === id) || `No Data Found for id : ${id}`;
    res.send(singlePhone);
})

app.listen(port, () => {
    console.log(`Okay, Server Running on port: ${port}`);
})