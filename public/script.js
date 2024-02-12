//VAR GLOBAIS
const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();


//FUNCOES


//DESENVOLVIMENTO
botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== "")    
    {socket.emit('nova mensagem', caixaMensagem.value);
    caixaMensagem.value = "";}
} )

socket.addEventListener('nova mensagem',(mensagem) => {
    const elementoMensagem = document.createElement('li'); //<li></li>
    elementoMensagem.textContent = mensagem; //<li>Alok bigodudo</li>
    elementoMensagem.classList.add('estiloMensagem'); //<li class = "estiloMensagem">Alok bigodudo</li>
    chat.appendChild(elementoMensagem); //<li id = 'mensagens' class = "estiloMensagem">Alok bigodudo</li>
})