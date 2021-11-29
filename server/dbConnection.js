const mongoose = require("mongoose");

// Connecting to database
mongoose.connect(
  "mongodb+srv://test:test@cluster0.rogo5.mongodb.net/todoapp?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
  status: { type: String },
  content: { type: String },
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
  Todos,
};
