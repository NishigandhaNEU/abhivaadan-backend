const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = "mongodb+srv://japangor:japangor@cluster0.d8fkrsn.mongodb.net/hangman"
    // Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});