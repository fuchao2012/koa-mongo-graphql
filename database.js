const mongoose = require("mongoose");

const initDB = () => {
    mongoose.connect(
        'mongodb://127.0.0.1:27017/koa-graphql',
        { useNewUrlParser: true }
    );
    mongoose.connection.once('open', () => {
        console.log('connect to local mongo success');
    })
}

module.exports = initDB;