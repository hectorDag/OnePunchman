const express = require('express');
const heroesRouter = express.Router();

const Heroes = [
    {id: 1, name: "Saitama", age: 25, type: "Fisico", class: "B", position: 7},
    {id: 2, name: "Genos", age: 19, type: "Maquina", class: "S", position: 14},
    {id: 3, name: "King", age: 29, type: "Fisico", class: "S", position: 7},
    {id: 4, name: "Fubuki", age: 23, type: "Psiquico", class: "B", position: 1},
    {id: 5, name: "Silver Bang", age: 81, type: "Fisico", class: "S", position: 3},
    {id: 6, name: "Tatsumaki", age: "Desconocido", type: "Psiquico", class: "S", position: 2},
    {id: 7, name: "Puri Puri Prisionero", age: 33, type: "Fisico", class: "S", position: 17},
    {id: 8, name: "Ciclista Sin Licencia", age: 25, type: "Fisico", class: "C", position: 1},
    {id: 9, name: "Metal-Knight", age: "Desconocido", type: "Maquina", class: "S", position: 6},
    {id: 10, name: "Metal Bat", age: 17, type: "Arma", class: "S", position: 15},
];

heroesRouter.get('/', (req, res) => {
    res.send('Api de Heroes del anime "One-PunchMan');
});

heroesRouter.get('/heroes', (req, res) => {
    console.log(Heroes);
    res.send(Heroes);
});

module.exports = heroesRouter;
