import { fazerLogin } from '../src/contasLogin.js'
import assert from 'node:assert'

describe('Testes de Login', () => {
    it('Validar login com usuário e senhas válidos', () => {
        // Arrange
        const emailValido = 'ana@example.com'
        const senhaValida = 'qwerty'
        const mensagemEsperada = 'Login realizado com sucesso.'

        // Act
        const mensagemRetornada = fazerLogin(emailValido, senhaValida)

        // Assert
        assert.equal(mensagemEsperada, mensagemRetornada)
    })

    it('Validar login com usuário inválido', () => {
        // Arrange
        const emailInvalido = 'invalido@example.com'
        const senhaInvalida = 'invalida'
        const mensagemEsperada = 'Usuário não encontrado.'

        // Act
        const mensagemRetornada = fazerLogin(emailInvalido, senhaInvalida)

        // Assert
        assert.equal(mensagemEsperada, mensagemRetornada)
    })

    it('Validar login com senha incorreta', () => {
        // Arrange
        const emailValido = 'maria@example.com'
        const senhaIncorreta = 'senhaErrada'
        const mensagemEsperada = 'Senha incorreta.'

        // Act
        const mensagemRetornada = fazerLogin(emailValido, senhaIncorreta)

        // Assert
        assert.equal(mensagemEsperada, mensagemRetornada)
    })

    it('Validar login com usuário expirado', () => {
        // Arrange
        const emailExpirado = 'pedro@example.com'
        const senhaValida = 'xyz123'
        const mensagemEsperada = 'Renove suas credenciais.'

        // Act
        const mensagemRetornada = fazerLogin(emailExpirado, senhaValida)

        // Assert
        assert.equal(mensagemEsperada, mensagemRetornada)
    })
})