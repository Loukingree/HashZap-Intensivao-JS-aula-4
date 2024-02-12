//VAR GLOBAIS
const http = require('http'); //require é o mesmo que import
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

//FUNCOES
() => { //funcao sem nome/anonima (arrow function)
    
    return
} 

io.addListener('connection', (socket) => { //addListener no node = addEventListener
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (mensagem) => {
        io.emit('nova mensagem', mensagem);
    })
}) 



//DESENVOLVIMENTO
aplicacao.use(express.static('public'));



servidorHttp.listen(7777, ''); //FUNCIONANDO NA MINHA REDE lan LOCAL!