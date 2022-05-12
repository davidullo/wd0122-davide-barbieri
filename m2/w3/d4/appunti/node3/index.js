const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index')
})
app.get('/contatti', (req, res) => {
    res.send('contatti')
})

app.listen(3000, () => {
    console.log(('Server running at https://127.0.0.1:3000'));
})