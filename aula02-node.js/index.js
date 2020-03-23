/* 
    0. Obter um usuario
    1. Preciso obter o numero de telefone de um usuario a partir de seu id.
    2. Obter o endereço do usuario pelo id.
*/
// importamos o módulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)

obterUsuario = () => {
    // Quando der algum problema -> reject(Erro)
    // Quando success -> resolv
    return new Promise(resolvePromise = (resolve, reject) => {
        setTimeout( () => {
            // return reject( new Error('Deu ruim de verdade'));
            return resolve({
                id: 1,
                nome: 'julia',
                dataNasc: new Date()
            })
        }, 1000)

    })
    
}

obterTelefone = (idUsuario) => {
    return new Promise( resolverPromise = (resolve, reject) =>{
        setTimeout( () => {
            return resolve({
                telefone: '997747643',
                ddd: '11'
            })
        }, 2000);

    })
}

obterEndereco = (idUsuario, callback) => {
    setTimeout( () => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()
// Para manipular o sucesso, usamos a função .then;
// Para manipular erros, usamos o .catch
// Usuario -> telefone -> telefone
usuarioPromise
    .then( (usuario) => {
        return obterTelefone(usuario.id)
        .then(resolverTelefone = (result) => {
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then( (resultado) => {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then( resolverEndereco = (result) => {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then( (resultado) => {
        console.log('Resultado: ', resultado)
    })
    .catch( (error) => {
        console.error('Deu ruim', error)
    })


// obterUsuario(resolverUsuario = (error, usuario) => {
//     if (error){ 
//         console.error('Deu ruim em Usuario ', error)
//         return;
//     }
//     obterTelefone(usuario.id, resolverTelefone = (error1, telefone) => {
//         if (error1){ 
//             console.error('Deu ruim em telefone', error)
//             return;
//         }
//         obterEndereco(usuario.id, resolverEndereco = (error2, endereco) => {
//             if (error2){ 
//                 console.error('Deu ruim em Endereco', error)
//                 return;
//             }

//         console.log(`
//             Nome: ${usuario.nome}
//             Endereco: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//         `)
        
//         })
//     })
// });
