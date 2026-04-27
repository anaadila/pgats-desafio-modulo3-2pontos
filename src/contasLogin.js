const usuarios = [
    {
        id: 1,
        nome: "João",
        email: "joao@example.com",
        senha: "123456",
        expirado: false
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@example.com",
        senha: "abcdef",
        expirado: false
    },
    {
        id: 3,
        nome: "Pedro",
        email: "pedro@example.com",
        senha: "xyz123",
        expirado: true
    },
    {
        id: 4,
        nome: "Ana",
        email: "ana@example.com",
        senha: "qwerty",
        expirado: false
    },
    {
        id: 5,
        nome: "Carlos",
        email: "carlos@example.com",
        senha: "asdfgh",
        expirado: false
    }
];


export function fazerLogin(email, senha) {

    for (let i = 0; i < usuarios.length; i++) {
        // Checar autenticação do login
        if (usuarios[i].email == email && usuarios[i].senha == senha) {
            // Checar usuário expirado
            if (usuarios[i].expirado == true) {
                return 'Renove suas credenciais.'
            } else {
                return 'Login realizado com sucesso.'
            }
        // Checar senha incorreta
        } else if (usuarios[i].email == email && usuarios[i].senha != senha) {
            return 'Senha incorreta.'
        }
    }

    // Ao passar pelo loop sem encontrar o email, retorna usuário não encontrado
    return 'Usuário não encontrado.'

}
