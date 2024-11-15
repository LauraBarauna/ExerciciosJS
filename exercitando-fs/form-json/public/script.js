// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');

// const {escreverDados, lerDados} = require('../app');

const btn = document.querySelector('.botao');
const inputNome = document.querySelector('#name');
const inputIdade = document.querySelector('#age');

let pessoas = [];

btn.addEventListener('click', e => {
    handleSubmit(e);
    criaPessoa(inputNome.value, inputIdade.value);
})

function handleSubmit(e) {
    e.preventDefault();
}

function criaPessoa(nome, idade) {
    const criaPessoa = {nome, idade};
    pessoas.push(criaPessoa);
    console.log(pessoas)
}