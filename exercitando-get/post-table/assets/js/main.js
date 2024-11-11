const botao = document.querySelector('#load-more');
const tabela = document.querySelector('#post-table');
let posts = [];

let loadedCount  = 0;
let postsPerPage  = 10;

function apiAxios () {
    axios('https://jsonplaceholder.typicode.com/posts')
        .then(resposta => {
            posts = resposta.data;
            carregaPost();
        })
        .catch(error => console.error("Erro ao carregar posts:", error));
}

botao.addEventListener('click', () => {
    carregaPost();
})

function carregaPost () {

    if (loadedCount >= posts.length) {
        alert("Não há mais posts para carregar.");
        return;
    }

    const postsSlice = posts.slice(loadedCount, loadedCount + postsPerPage);

    postsSlice.forEach((elemento, indice) => {
        let colunaTitulo = document.createElement('td');
        let colunaCounteudo = document.createElement('td');
        colunaTitulo.innerText = elemento.title;
        colunaCounteudo.innerText = elemento.body;
        
        let linha = document.createElement('tr');

        if(indice === 0) {
            linha.classList.add('destacado');

            
        }



        linha.appendChild(colunaTitulo);
        linha.appendChild(colunaCounteudo);

        tabela.appendChild(linha)   
    })

    loadedCount += postsPerPage;
}

apiAxios();