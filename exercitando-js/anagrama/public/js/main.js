const inputPrimeiraPalavra = document.querySelector('.primeira-palavra');
const inputSegundaPalavra = document.querySelector('.segunda-palavra');
const botaoEnviar = document.querySelector('.enviar-palavras');
const divResultado = document.querySelector('.anagrama');
const mensagem = document.createElement('p');

// Evento para acionar o botão com a tecla Enter
document.addEventListener('keydown', (evento) => {
    if (
        evento.key === 'Enter' &&
        (document.activeElement === inputPrimeiraPalavra || document.activeElement === inputSegundaPalavra)
    ) {
        botaoEnviar.click(); // Simula o clique do botão
    }
});

botaoEnviar.addEventListener('click', () => {
    const primeiraPalavra = inputPrimeiraPalavra.value;
    const segundaPalavra = inputSegundaPalavra.value;

    divResultado.innerHTML = '';

    if (primeiraPalavra.length === 0 || segundaPalavra.length === 0) {
        mensagem.innerText = 'Por favor, digite algo!';
        mensagem.className = 'anagrama-false';
        divResultado.appendChild(mensagem);
        return divResultado;
    } else {
        verificarAnagrama(primeiraPalavra, segundaPalavra);
    }
});

function verificarAnagrama(primeiraPalavra, segundaPalavra) {
    mensagem.className = 'anagrama-true';
    divResultado.innerHTML = '';

    let palavra1Formatada = primeiraPalavra.toUpperCase().replace(/\s+/g, '');
    let palavra2Formatada = segundaPalavra.toUpperCase().replace(/\s+/g, '');

    if (palavra1Formatada.length !== palavra2Formatada.length) {
        mensagem.innerText = 'Não são anagramas, tamanhos diferentes!';
        mensagem.className = 'anagrama-false';
        divResultado.appendChild(mensagem);
        return divResultado;
    }

    const palavra1Ordenada = [...palavra1Formatada].sort();
    const palavra2Ordenada = [...palavra2Formatada].sort();

    let contadorIgualdades = 0;

    palavra1Ordenada.forEach((letra, indice) => {
        if (letra === palavra2Ordenada[indice]) {
            contadorIgualdades++;
        }
    });

    if (contadorIgualdades === palavra1Formatada.length) {
        mensagem.innerText = 'São anagramas!';
        divResultado.appendChild(mensagem);
        return divResultado;
    } else {
        mensagem.innerText = 'Não são anagramas!';
        mensagem.className = 'anagrama-false';
        divResultado.appendChild(mensagem);
        return divResultado;
    }
}
