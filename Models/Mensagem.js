const mongoose = require('mongoose')

const {Schema} = mongoose

const mensagemSchema = new Schema({
    de:{
        type:String,
        require:true
    },
    para:{
        type:String,
        require:true
    },
    mensagem:{
        type:String,
        require:true
    }
},{timestamps: true})

const Mensagem = mongoose.model("Mensagem", mensagemSchema)

module.exports = {Mensagem, mensagemSchema}