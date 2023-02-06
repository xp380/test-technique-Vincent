const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
  datasetid: String,
  fields: Object,
  record_timestamp: Date,
});

module.exports = mongoose.model("Todo", Todo);
