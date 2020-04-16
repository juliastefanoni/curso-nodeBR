const { get } = require('axios');

const URL = `https://pokeapi.co/api/v2/pokemon/`;

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const result = await get(url);

  return result.data.results.map(mapearPessoas);
}

function mapearPessoas(item) {
  return {
    name: item.name,
    url: item.url
  }
}

module.exports = { obterPessoas };