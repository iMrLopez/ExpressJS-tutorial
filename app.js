const app = require('express')();
const port = 3000;

app.use('/contacts', require('./routes/contact_routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// app.js (inicializar) -> routes -> services -> infraestructure