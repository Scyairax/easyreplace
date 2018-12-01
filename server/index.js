const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

require('./routes/router.js')(app, express);
require('../server/config/db.js');

app.listen(PORT,  () => {
    console.log("http://localhost:" + PORT);
    console.log("ciao sono il tuo host, sono in piedi!!! ;-) credici !!!")
});
