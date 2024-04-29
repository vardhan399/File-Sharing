const mongoose = require('mongoose');
mongoose.connect("")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,

})

const fileSChema = new mongoose.Schema({
    filename: {type: String,  required: true},
    path: {type: String, required: true},
    size: {type: Number, required:true},
    uuid : {type: String, required: true},
    sender: {type: String, required: false},
    reciever: {type: String, required: false}
})

const USER = mongoose.model('USER', userSchema);

const FILE = mongoose.model('FILE',fileSChema);


 module.exports ={
    USER,
    FILE
};