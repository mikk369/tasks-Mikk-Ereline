const mongoose 0 require ('mongoose')

//connecting to database
mongoose.connect("mongodb+srv://test:test@cluster0.rogo5.mongodb.net/todoapp?retryWrites=true&w=majority", {useNewUrlParsel: true});
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {type: String},
    status: {type: String},  
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
    Todos,
}