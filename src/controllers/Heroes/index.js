const HeroesService = require('../../services/Heroes/index');
const heroesService = new HeroesService();

const getHeroes = async (req, res) => {
    try {
      const Heroes = await heroesService.allHeroes();
      res.status(200).json(Heroes);
    } catch(error) {
      res.status(404).json( { message: 'No hay heroes.' } );
    }
}

module.exports = {
  getHeroes
}  

/*
const create = (req, res) => {
    try {
      const newPokemon = req.body;
      pokemonService.createPokemon(newPokemon);
      res.status(201).send();
    } catch(error) {
      res.status(500).json( { message: 'error fatal' } )
    }
    
  }

const getHeroes = async (req, res) => {
  try {
    const Heroes = await heroesService.allHeroes();
    res.status(200).json(Heroes);
  } catch(error) {
    res.status(404).json( { message: 'No hay heroes.' } );
  }
*/
