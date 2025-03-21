const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const api = require('./api/api');

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Odebrano połączenie');
    res.send('This is Test Server');
});
app.use('/', api);

app.use((req, res) => {
    res.status(404).send('404 not found...');
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});