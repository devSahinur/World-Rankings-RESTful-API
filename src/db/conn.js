const mongoose = require('mongoose');
require('dotenv').config()

const uri = `${process.env.DB_HOST}`;

mongoose.connect(uri, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('connection successful')
}).catch((e) => {
    console.log('No connection successful')
})