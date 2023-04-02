const routerPokemon = require('./Heroes/index');

const routerApi = (app) => {
    app.use('/', routerPokemon);
}

module.exports = routerApi;