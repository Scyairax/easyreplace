var mongoose = require('mongoose');

mongoose.connect('mongodb://Easyreplacement:carreplace00@ds123224.mlab.com:23224/easyreplace',
    { useNewUrlParser: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("connesso al db");
        }
    });

mongoose.Promise = global.Promise;