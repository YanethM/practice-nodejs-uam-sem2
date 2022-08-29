const mongoose = require('mongoose');
const subjectSchema = mongoose.Schema({
  subject_name: { type: String, require: true },
  code: { type: String, require: true, unique: true },
  credits: { type: Number, require: true },
  hours: { type: Number, require: true},
});
module.exports = mongoose.model('subjectCollection', subjectSchema);
