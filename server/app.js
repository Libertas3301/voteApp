const express = require('express');
const handle = require('./handlers/index')
const app = express();
const port = 3333;

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;

    next(err);
})

app.use(handle.errorHandler)

app.get('/', (req, res, next) => {
    res.json({ raset: 'ahah' });
})

app.listen(port, () => { console.log(`Page is hosted on localhost ${port}`) });