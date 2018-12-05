module.exports = function (app, express) {
  var path = require('path')
    
    var bodyParser = require('body-parser')
      app.use(bodyParser.json())
    

    
      app.use('/public' , express.static(path.join(__dirname ,'..', '..', '/public')))//public in questo caso è un alias e non è un percorso vero, ma inserendo nel file html il percorso dello script che si trova in public con il suo alias, io mio router lo
      app.use('/angular' , express.static(path.join(__dirname ,'..', '..', '/node_modules','angular')))
      app.use('/jquery', express.static(path.join(__dirname, '..', '..', '/node_modules', 'jquery', 'dist')))
      app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', '/node_modules', 'bootstrap', 'dist')))
      app.use('/ui-router', express.static(path.join(__dirname, '..', '..', '/node_modules', '@uirouter', 'angularjs', 'release')))
  
  
      app.use('/api/ricambi', require('../resource/ricambi/index.js'));
      app.use('/api/utenti', require('../resource/utenti/index.js'));
      app.use('/api/demolitori', require('../resource/demolitori/index.js'));
      app.use('/api/auto', require('../resource/auto/index'));
      app.use('/api/tiporicambio', require('../resource/tipo_ricambi/index'));
  
      app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', '/public', '/index.html'));
       //   app.use('/public', express.static(path.join(__dirname, '..', '..', '/public', '/app.js')))
       // app.use('/public' , express.static(path.join(__dirname ,'..', '..', '/public', '/controller.js')))
      
   })
  
  }
//questa configurazione permette di lanciare nodemon solo tramite npm run dev "dev": "nodemon server/index.js", 