const { obterPessoas } = require('./service');

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let index = 0; index <= this.length -1; index++){
    valorFinal = callback(valorFinal, this[index], this);
  }

  return valorFinal;
}

async function main() {
  try{
    // const { results } = await obterPessoas('a');

    // const pesos = results.map(item => parseInt(item.weight));
    // console.log('Pesos: ', pesos);

    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior + proximo
    // })

    const minhaLista = [
      ['Julia', 'Maria'],
      ['NodeBR', 'Nerdzao']
    ]
    const total = minhaLista.meuReduce((anterior, proximo) => {
      return anterior.concat(proximo);
    }, []).join(', ');

    console.log('Total: ', total);

  }catch(error){
    console.error('Deu erro: ', error);
  }
}

main();