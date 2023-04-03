const express = require('express');
const {getHeroes, newHeroe, editComplete, editPartial, deleteHeroe} = require("../../controllers/Heroes/index");
const heroesRouter = express.Router();

heroesRouter.get('/', getHeroes);

heroesRouter.post('/new', newHeroe);

/*
heroesRouter.put('/editC:id', editComplete);

heroesRouter.patch('/editP:id', editPartial);

heroesRouter.delete('/delete:id', deleteHeroe);
*/

module.exports = heroesRouter;
