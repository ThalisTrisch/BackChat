const mongoose = require('mongoose');

async function Start(){
    try{
        const db = mongoose.connect('mongodb+srv://thalistrisch:q6J2sTOG465yzGSm@cluster0.knpmfxp.mongodb.net/test')
        console.log("conectado ao banco.")
    }catch(err){
        console.log("Erro no banco: "+err)
    }
}

module.exports = Start;