const express = require('express');
const path = require('path');
const bootCSS = require('/node_modules/bootstrap/dist/css/bootstrap.min.css');
const bootJS = require('/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


app.get('/contatti', (req, res) => {
    res.sendFile(__dirname + '/contatti.html');
})

app.get('/chi-siamo', (req, res) => {
    res.sendFile(__dirname + '/chi-siamo.html');
})

// app.get('/contatti', (req, res) => {
//     res.send('contatti')
// })

// app.get('/chi-siamo', (req, res) => {
//     res.send('chi-siamo')
// })

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000')
})