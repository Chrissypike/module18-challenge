const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/module18', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;