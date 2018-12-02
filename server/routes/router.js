module.exports = function (app, express){
    
    var bodyParser = require('body-parser')
      app.use(bodyParser.json())
    //  app.get('/', (req, res) => {
    //      res.send('ciao mondo');
   //   }) 
      app.use('/ricambi', require('../resource/ricambi/index.js'));
      app.use('/utenti', require('../resource/utenti/index.js'));
      app.use('/demolitori', require('../resource/demolitori/index.js'));
      app.use('/auto', require('../resource/auto/index'));
      app.use('/tiporicambio', require('../resource/tipo_ricambi/index'));
  }
//questa configurazione permette di lanciare nodemon solo tramite npm run dev "dev": "nodemon server/index.js", 