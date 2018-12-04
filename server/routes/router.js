module.exports = function (app, express) {

  var bodyParser = require('body-parser')
  app.use(bodyParser.json())
  var path = require('path')



  app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')))
  app.use('/dist', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap','dist')))
  app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')))
  app.use('/ui-router', express.static(path.join(__dirname, '..', '..', 'node_modules', '@uirouter', 'angularjs','release')))


  app.use('/api/ricambi', require('../resource/ricambi/index.js'));
  app.use('/api/utenti', require('../resource/utenti/index.js'));
  app.use('/api/demolitori', require('../resource/demolitori/index.js'));
  app.use('/api/auto', require('../resource/auto/index'));
  app.use('/api/tiporicambio', require('../resource/tipo_ricambi/index'));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
  })

}
//questa configurazione permette di lanciare nodemon solo tramite npm run dev "dev": "nodemon server/index.js", 