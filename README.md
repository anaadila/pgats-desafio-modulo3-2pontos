# pgats-desafio-modulo3-2pontos

Desafio do Módulo 3 da pós-graduação em Automação de Testes com função de login e validações de credenciais (sucesso, expirado, usuário não encontrado e senha incorreta), incluindo testes automatizados.

## 📋 Descrição do Desafio

### Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

### Objetivo:
Construa uma função para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

### Testes:
Escreva 4 testes: 
1. ✅ Sucesso
2. ⏰ Credencial expirada
3. ❌ Usuario não encontrado
4. 🔐 Senha incorreta para o usuário encontrado

### Exemplos:
```javascript
fazerLogin('email@existente.com', 'senhaCerta123'); 
// -> 'Login realizado com sucesso'

fazerLogin('credencial@expirada.com', 'senhaCerta123'); 
// -> 'Renove suas credenciais'
```

## 🚀 Instalação

### Pré-requisitos:
- Node.js 14+ instalado

### Passos:
1. Clone ou baixe o repositório:
```bash
git clone <url-do-repositorio>
cd pgats-desafio-modulo3-2pontos
```

2. Instale as dependências:
```bash
npm install
```

## 📝 Como Usar

### Rodar os testes
Execute todos os testes:
```bash
npm test
```

### Gerar relatório visual
Gera um relatório em HTML:
```bash
npm run test:report
```

Para abrir o relatório em HTML através da linha de comando:

**Windows:**
```bash
start .\mochawesome-report\mochawesome.html
```

**Mac:**
```bash
open ./mochawesome-report/mochawesome.html
```

**Linux:**
```bash
xdg-open ./mochawesome-report/mochawesome.html
```

O relatório é salvo em `mochawesome-report/mochawesome.html`

## 📂 Estrutura do Projeto

```
pgats-desafio-modulo3-2pontos/
├── src/
│   └── contasLogin.js          # Função principal de login
├── test/
│   └── contasLogin.test.js     # Testes unitários automatizados
├── package.json                 # Dependências do projeto
└── README.md                     # Este arquivo
```

## 🧪 Detalhes dos Testes

Os testes cobrem os seguintes cenários:

| Teste | Email | Senha | Esperado |
|-------|-------|-------|----------|
| ✅ Login Válido | ana@example.com | qwerty | Login realizado com sucesso. |
| ❌ Usuário Inválido | invalido@example.com | invalida | Usuário não encontrado. |
| 🔐 Senha Incorreta | maria@example.com | senhaErrada | Senha incorreta. |
| ⏰ Usuário Expirado | pedro@example.com | xyz123 | Renove suas credenciais. |

## 📦 Dependências

- **mocha**: Framework de testes
- **mochawesome**: Reporter visual para Mocha