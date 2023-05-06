const mongoose = require('mongoose');
const user = "thalistrisch2003"
const password = "Qi8TRb4WUjnxHISy"
async function Start(){
    try{
        const db = mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.b9ya9is.mongodb.net/`)
        console.log("conectado ao banco.")
    }catch(err){
        console.log("Erro no banco: "+err)
    }
}

module.exports = Start;