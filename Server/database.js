const mongoose = require('mongoose');

const URI = 'mongodb://localhost/heroes';

mongoose.connect(URI, { useNewUrlParser: true,  useUnifiedTopology: true })
        .then( db => console.log('db is connect'))
        .catch( err => console.log(err));

module.exports = mongoose;
