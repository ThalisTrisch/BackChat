const mongoose = require('mongoose')

const {Schema} = mongoose

const {mensagemSchema} = require("./Mensagem.js")

const usuarioSchema = new Schema({
    nome:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    id:{
        type:Number,
        require:true
    },
    foto: String,
    mensagem: {
        type: [mensagemSchema]
    },
},{timestamps: true})

const Usuario = mongoose.model("Usuario", usuarioSchema)

module.exports = {Usuario,usuarioSchema}