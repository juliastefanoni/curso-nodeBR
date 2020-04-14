const service = require('./service');

Array.prototype.meuMap = function(callback){
  const novoArrayMapeado = [];

  for(let indice=0; indice <= this.length - 1; indice++){
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }

  return novoArrayMapeado;
}

async function main() {
  try{
    const results = await service.obterPessoas('a');

    // results.results.forEach(function (item){
    //   names.push(item.name);
    // });

    // const names = results.results.map(pessoa => pessoa.name);

    const names = results.results.meuMap((pessoa, indice) => pessoa.name);

    console.log('names', names);
  }catch(error){
    console.error('Deu erro: ', error);
  }
}

main();