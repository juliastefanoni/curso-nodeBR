const assert = require('assert');
const { obterPessoas } = require('./service');

const nock = require('nock');

describe('Star Wars Testes', function() {
  this.beforeAll( () => {
    const response = {
      "count": 964,
      "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
      "previous": null,
      "results": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
      ]
    }
    nock('https://pokeapi.co/api/v2/pokemon')
      .get('/${URL}/?search=${nome}&format=json')
      .reply(response);
  });

  it('SearchOnApiFormatted', async () => {
    const expected = {name: 'bulbasaur'}
    const nomeBase = 'bulbasaur';

    const resultado = await obterPessoas(nomeBase);

    assert.deepEqual(resultado, expected);
  });
});