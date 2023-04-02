const express = require('express');
const heroesRouter = express.Router();

pokemonRouter.get('/', () => {
    console.log("Funciona!!!");
});

/*
pokemonRouter.get('/:id/', getById);

pokemonRouter.post('/', create);

pokemonRouter.patch('/:id', editPartial);

pokemonRouter.put('/:id', editComplete);

pokemonRouter.delete('/:id', deletePokemon);
*/

module.exports = heroesRouter;