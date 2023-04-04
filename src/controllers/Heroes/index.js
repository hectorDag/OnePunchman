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
    const Heroe = heroesService.idHeroe(req.params.id);
    res.status(201).send(Heroe);
  } catch(error){
    res.status(404).json( { message: 'Heroe no encontrado.' } )
}
}

const newHeroe = (req, res) => {
  try {
    heroesService.createHeroe(req.body);
    res.status(200).json( { message: 'Heroe creado.' } )
  } catch(error) {
    res.status(500).json( { message: 'Error fatal.' } )
  } 
}

const editComplete = (req, res) => {
  try{
    heroesService.completeEdit(req.body, req.params.id);
    res.status(200).json( { message: 'Heroe editado.'} )
  } catch (error) {
    res.status(500).json( { message: 'Error fatal'} )
  }
}

const editPartial = (req, res) => {
  try{
    heroesService.partialEdit(req.body, req.params.id);
    res.status(200).json( { message: 'Heroe editado.' } );
  } catch (error) {
    res.status(500).json( { message: 'Error fatal.' } )
  }
}

const deleteHeroe = (req, res) => {
  try{
    heroesService.eliminate(req.params.id);
    res.status(200).json( { message: 'Heroe eliminado.' } )
  } catch (error) {
    res.status(500).json( { message: 'Error fatal.' } )
  }
}

module.exports = {
  getHeroes,
  getById,
  newHeroe,
  editComplete,
  editPartial,
  deleteHeroe
}  
