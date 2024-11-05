const input = document.querySelector('#search');
const valorInput = input.value;
const div = document.querySelector('.user-list');

input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
       axios('https://jsonplaceholder.typicode.com/users')
        .then(resposta => carregaElementosNaPagina(resposta.data));
    }
})

function carregaElementosNaPagina (json) {

    let buscaPessoaPeloNome = json.filter((nomePessoa, indice) => nomePessoa.name === input.value);
    
    console.log(buscaPessoaPeloNome.email)
}