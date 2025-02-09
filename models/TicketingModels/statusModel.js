const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Status', statusSchema);
