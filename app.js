const express = require('express');
const app = express();
const port = process.env.port || 3000;
const routerApi = require('./src/routes/main.routes');

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const Heroes = [
    {name: "Saitama", age: 25, type: "Fisico", class: "B", position: 7},
    {name: "Genos", age: 19, type: "Maquina", class: "S", position: 14},
    {name: "King", age: 29, type: "Fisico", class: "S", position: 7},
    {name: "Fubuki", age: 23, type: "Psiquico", class: "B", position: 1},
    {name: "Silver Bang", age: 81, type: "Fisico", class: "S", position: 3},
    {name: "Tatsumaki", age: "Desconocido", type: "Psiquico", class: "S", position: 2},
    {name: "Puri Puri Prisionero", age: 33, type: "Fisico", class: "S", position: 17},
    {name: "Ciclista Sin Licencia", age: 25, type: "Fisico", class: "C", position: 1},
    {name: "Metal-Knight", age: "Desconocido", type: "Maquina", class: "S", position: 6},
    {name: "Metal Bat", age: 17, type: "Arma", class: "S", position: 15},
];

app.get('/', (req, res) => {
    res.send('Api de Heroes del anime "One-PunchMan');
});

app.get('/heroes', (req, res) => {
    console.log(Heroes);
    res.send(Heroes);
});