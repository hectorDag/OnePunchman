const HeroesService = require('../../services/Heroes/index');
const heroesService = new HeroesService();

const getHeroes = async (req, res) => {
    try {
      const Heroes = await heroesService.allHeroes();
      res.status(200).json(Heroes);
    } catch(error) {
      res.status(404).json( { message: 'No hay Heroes.' } );
    }
}

const getById = (req, res) => {
  try{
    const id = req.params.id;
    const Heroe = heroesService.idHeroe(id);
    res.status(201).send(Heroe);
  } catch(error){
    res.status(404).send('Heroe no encontrado.')
  }
}

const newHeroe = (req, res) => {
  try {
    const newHeroe = req.body;
    heroesService.createHeroe(newHeroe);
    res.status(200).send();
  } catch(error) {
    res.status(500).json( { message: 'Error fatal.' } )
  }
  
}

module.exports = {
  getHeroes,
  getById,
  newHeroe
}  
