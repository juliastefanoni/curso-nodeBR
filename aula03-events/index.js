const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function (click) {
  console.log('Um usuario clicou', click);
})

// let count = 0;
// setInterval(function() {
//   meuEmissor.emit(nomeEvento, 'na barra de rolagem ' + (count++));
// }, 1000)

const stdin = process.openStdin()
stdin.addListener('data', function(value) {
  console.log(`Voce digitou: ${value.toString().trim()}`)
})