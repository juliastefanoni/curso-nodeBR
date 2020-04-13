/* 
    0. Obter um usuario
    1. Preciso obter o numero de telefone de um usuario a partir de seu id.
    2. Obter o endereço do usuario pelo id.
*/
// importamos o módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout( function() {
            return resolve({                
                id: 1,
                nome: 'julia',
                dataNasc: new Date()
            })
        }, 1000) 
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout( function() {
                return resolve({
                    telefone: '997747643',
                    ddd: '11'
                })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout( () => {
        return callback(null, {
            rua: 'dos buebos',
            numero: 8
        })
    })
}

main()
async function main() {
    try {
        console.time('medidaPromise');
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1];
        const telefone = resultado[0];

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medidaPromise');

    }catch(error){
        console.error('Deu erro: ', error);
    }
}

// const usuarioPromise = obterUsuario()
// // Para manipular o sucesso, usamos a função .then;
// // Para manipular erros, usamos o .catch

// usuarioPromise
//     .then( function (usuario) {
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then( function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then( resolverEndereco = (result) => {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         });
//     })
//     .then( (resultado) => {
//         console.log('Resultado: ', resultado)
//     })
//     .catch( (error) => {
//         console.error('Deu ruim', error)
//     })

