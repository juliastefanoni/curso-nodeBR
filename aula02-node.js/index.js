/* 
    0. Obter um usuario
    1. Preciso obter o numero de telefone de um usuario a partir de seu id.
    2. Obter o endereço do usuario pelo id.
*/

obterUsuario = (callback) => {
    setTimeout( () => {
        return callback(null, {
            id: 1,
            nome: 'julia',
            dataNasc: new Date()
        })
    }, 1000)
}

obterTelefone = (idUsuario, callback) => {
    setTimeout( () => {
        return callback(null, {
            telefone: '997747643',
            ddd: '11'
        })
    }, 2000);
}

obterEndereco = (idUsuario, callback) => {
    setTimeout( () => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

resolverUsuario = (error, usuario) => {
    console.log('usuario', usuario);
}

obterUsuario(resolverUsuario = (error, usuario) => {
    if (error){ 
        console.error('Deu ruim em Usuario ', error)
        return;
    }
    obterTelefone(usuario.id, resolverTelefone = (error1, telefone) => {
        if (error1){ 
            console.error('Deu ruim em telefone', error)
            return;
        }
        obterEndereco(usuario.id, resolverEndereco = (error2, endereco) => {
            if (error2){ 
                console.error('Deu ruim em Endereco', error)
                return;
            }

        console.log(`
            Nome: ${usuario.nome}
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
        `)
        
        })
    })
});
