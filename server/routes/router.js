module.exports = function (app, express){
    
    var bodyParser = require('body-parser')
      app.use(bodyParser.json())
    //  app.get('/', (req, res) => {
    //      res.send('ciao mondo');
   //   }) 
      
      app.use('/utenti', require('../resource/utenti/index.js'));
      app.use('/demolitori', require('../resource/demolitori/index.js'));
  }
//questa configurazione permette di lanciare nodemon solo tramite npm run dev "dev": "nodemon server/index.js", 