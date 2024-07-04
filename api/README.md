# ControleDeEmprestimos
 
 Esta é uma API para controle de empréstimos usando REST API e mysql2.

 A aplicação é feita usando express, sequelize, dotenv, bcryptjs e jsonwebtoken.

## 💿 Instalar os pacotes

``` 
npm init -y

npm install express mysql2 sequelize jsonwebtoken bcryptjs dotenv
```

## 🏃‍♂️ Iniciar o servidor

```
node server.js
```

## 🎯Rodar os testes
Os arquivos .http são utilizados para testar as funcionalidades da API.

*auth.http* : testa a autenticação de usuários, criando e autenticando login. As senhas são encriptadas antes de serem enviadas ao banco, ajudando na segurança.

*categorias.http* : testa o CRUD da tabela categorias, e também as permissões do usuário. As permissões são feitas por token.

### Exemplo:

*Request:*
`GET http://localhost:3000/categorias`

*Resposta:*
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 188
ETag: W/"bc-tLYmiPUSR/tqN23o5vRgTngi6no"
Date: Wed, 03 Jul 2024 20:26:33 GMT
Connection: close

[
  {
    "id": 1,
    "nome": "Carrinhos",
    "descricao": "Carrinhos Legais e El?tricos"
  },
  {
    "id": 2,
    "nome": "Cabos A",
    "descricao": "HDMI e Coaxiais"
  },
  {
    "id": 3,
    "nome": "Cabos B",
    "descricao": "Cabos dos carrinhos"
  }
]
```