const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

function escreverDados(caminho, json) {
  json = JSON.stringify(pessoas, '', 2);
  return escrever(caminho, json);
}

async function lerDados(caminho){
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(valor => console.log(valor))
}

module.exports = {
  escreverDados, lerDados
}