//importações gerais
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const con = require('./DBconnection/connection.js')
con()
const app = express()

//importações das models
const {Usuario} = require('./Models/Usuario')
const {Mensagem} = require('./Models/Mensagem')

//Ativações do express
app.use(cors());
app.use(express.json());

//Rotas get
app.get('/', (req,res) =>{
    res.send("Testando. deu certo, ok?")
})

app.get('/getusers/:email', async (req,res) =>{
    const users = await Usuario.find({email:{$ne:req.params.email}})
    res.send(users)
})

app.get('/getchat/:de/:para', async (req,res) =>{
    const {de, para} = req.params;
    const chat = await Mensagem.find({ $or: [{$and: [ { de:de}, {para:para} ] }, {$and: [ { de:para }, { para:de } ] }] })
    res.send(chat)
})

//Rotas post
app.post('/logar', async (req,res) =>{
    const { email, nome, id} = req.body
    const user = {
        nome: nome,
        email: email,
        id: id,
        foto: 'https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg'
    }
    const users = await Usuario.find({email:email})
    if(!users[0]){
        const CriarUser = Usuario.create(user)
        console.log("Conta de usuário criada.")
    }else{
        console.log("Esse usuário já está cadastrado.")
    }
})

app.post('/sendmensagem', async (req,res) =>{
    const {de, para, mensagem} = req.body
    const dadosmensagem = {
        de:de,
        para:para,
        mensagem:mensagem
    }
    const criarUser = await Mensagem.create(dadosmensagem)
})

const port = process.env.PORT || 9001;
app.listen(port, (req,res) =>{
    console.log(`listening in URL: http://localhost:${port}`)
})
