const express = require('express');
const app = express();
const port = process.env.port || 3000;
const routerApi = require('./src/routes/main.routes');

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

routerApi(app);