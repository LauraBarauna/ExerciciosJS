const input = document.querySelector('#search');
const div = document.querySelector('.user-list');

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(resposta => carregaElementosNaPagina(resposta.data));
    }
})

function carregaElementosNaPagina(json) {

    div.innerHTML = '';

    let buscaPessoaPeloNome = json.filter(nomePessoa =>
        nomePessoa.name.toLowerCase().includes(input.value.toLowerCase())
    );

    if (buscaPessoaPeloNome.length === 0) {
        const p = document.createElement('p');
        p.innerText = 'Nenhum usuário encontrado!';
        div.appendChild(p);
        return;
    }

    buscaPessoaPeloNome.forEach(pessoa => {
        const card = document.createElement('div');
        card.classList.add('user-card');

        const nome = document.createElement('p');
        nome.innerText = `Nome: ${pessoa.name}`
        card.appendChild(nome);

        const email = document.createElement('p');
        email.innerText = `E-mail: ${pessoa.email}`;
        card.appendChild(email);

        const cidade = document.createElement('p');
        cidade.innerText = `Cidade: ${pessoa.address.city}`;
        card.appendChild(cidade);

        div.appendChild(card);
    });

}

