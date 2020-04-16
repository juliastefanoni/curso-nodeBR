const Commander = require('commander');
const database = require('./database');
const Heroi = require('./heroi');

async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do Heroí")
    .option('-p, --poder [value]', "Poder do Heroí")
    .option('-i, --id [value]', "Id do Heroí")


    .option('-c, --cadastrar', "Cadastrar um heroí")
    .option('-l, --listar', "Listar um heroí")
    .option('-r, --remover', "Remover um heroí pelo ID")
    .option('-a, --atualizar [value]', "Atualizar um heroí pelo ID")


    .parse(process.argv);

  const heroi = new Heroi(Commander);

  try{
    if(Commander.cadastrar) {
      delete heroi.id

      const resultado = await database.cadastrar(heroi);
      if(!resultado){
        console.error('Heroí não foi cadastrado!');
        return;
      }
      console.log('Heroí cadastrado com sucesso!');
    }

    if(Commander.listar) {
      const resultado = await database.listar();
      console.log(resultado);

      return;
    }

    if(Commander.remover) {
      const resultado = await database.remover(heroi.id);
      if(!resultado) {
        console.error('Não foi possível remover o heroí');
        return;
      }

      console.log('Heroí removido com sucesso!');
    }

    if(Commander.atualizar) {
      const idAtualizar = parseInt(Commander.atualizar);
      
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado);

      const resultado = await database.atualizar(idAtualizar, heroiAtualizar);

      if(!resultado) {
        console.error('Não foi possível atualizar o heroí!');
        return;
      }
      console.log('heroí atualizado com sucesso!');
    }
  }catch(error){
    console.error('Deu erro: ', error);
  }
}

main();