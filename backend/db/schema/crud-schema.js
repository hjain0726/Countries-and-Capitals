const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var crudSchema = new Schema({
    name: String,
    capital: String
});

var crudModel = mongoose.model('crudModels', crudSchema);
module.exports = crudModel;