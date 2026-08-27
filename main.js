const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'aqui vai aparecer a senha'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas ='abcdefghijklmnopqrstuvwxyz'

let Numeros ='0123456789'

let 

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(".parametro-senha__botao")

botoes[0].onclick = diminuir;

function diminuir() {

    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha
    
}

botoes[1].onclick = aumentar;

function aumentar() {

    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha
    
}