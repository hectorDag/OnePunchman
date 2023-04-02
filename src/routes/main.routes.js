const routerHeroes = require('./Heroes/index');

const routerApi = (app) => {
    app.use('/heroes', routerHeroes);
}

module.exports = routerApi;