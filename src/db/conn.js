const mongoose = require('mongoose');

const uri = "mongodb+srv://skmsi:skmsi@cluster0.1zupo.mongodb.net/olymics?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('connection successful')
}).catch((e) => {
    console.log('No connection successful')
})