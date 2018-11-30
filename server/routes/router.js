module.exports = function (app, express){
    
    var bodyParser = require('body-parser')
      app.use(bodyParser.json())
    //  app.get('/', (req, res) => {
    //      res.send('ciao mondo');
   //   }) 
      //questo è referenziato con movies
    
  }
//questa configurazione permette di lanciare nodemon solo tramite npm run dev "dev": "nodemon server/index.js", 