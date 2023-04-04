const express = require('express');
const {getHeroes, getById, newHeroe, editComplete, editPartial, deleteHeroe} = require("../../controllers/Heroes/index");
const heroesRouter = express.Router();

heroesRouter.get('/', getHeroes);

heroesRouter.get('/:id', getById);

heroesRouter.post('/new', newHeroe);

heroesRouter.put('/editc/:id', editComplete);

heroesRouter.patch('/editp/:id', editPartial);

heroesRouter.delete('/delete/:id', deleteHeroe);


module.exports = heroesRouter;
