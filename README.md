# APIJewelPrices ⌚ 

Esta API permite criar, ler, atualizar e excluir dados sobre diferentes relógios de diversas marcas refinadas.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    DATABASE_URL=your_database_url
    ```

4. Execute as migrações e seeds do banco de dados:
    ```sh
    npx knex migrate:latest
    npx knex seed:run
    ```

5. Inicie a aplicação:
    ```sh
    npm start
    ```

## Endpoints

### POST
Sign up:
- URL: /signup
- Body: "name", "email", "password"

Sign in:
- URL: /signin
- Body: "email", "password"
- Response body: "uid", "bearer"

Curtir relógio (descurtir com o método DELETE):
- URL: /pessoas
- Query: ?id= (id do relogio)
- Header: "uid"

### GET
Obter relogios:
- URL: /relogios
- Body: "page", "limit"
- Query: ?brand=&model=&brand&=&price&priceMax=&priceMin=

Obter curtidas:
- URL : /pessoas
- Body: "page", "limit"
- Header: "uid" \

⚠️ Para acessar os endpoints é preciso autenticar e fazer requisições com um "bearer" correto no header \
O Front end para esta aplicação ainda [em desenvolvimento](https://github.com/caioalrodrig/AngularJewel).

