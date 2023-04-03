const routerHeroes = require('./Heroes/index');

const routerApi = (app) => {
    app.use('/', routerHeroes);
}

module.exports = routerApi;