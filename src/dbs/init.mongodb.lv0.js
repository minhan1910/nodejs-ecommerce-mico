'use strict'

// cho nay no tu cache lai nen chi co 1 connect toi 
// con java hay dotnet thi no ko cache neen  co nhieu ket noi den mongodb neu ko cache laij
const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/ShopDev`;

mongoose
    .connect(connectString)
    .then(_ => console.log('Connected Mongodb Sucess'))
    .catch(err => console.log(`Error Connecte!`));

// dev
if (1 === 0) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}


module.exports = mongoose;