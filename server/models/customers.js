var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var CustomerSchema = new Schema({
    firstName: String,
    surname: String,
    idNumber: Number,
    email: String,
    contactNumber: Number,
    address: String,
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: null }
});

module.exports = mongoose.model('Customer', CustomerSchema);