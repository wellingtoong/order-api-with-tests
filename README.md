# Order API with Unit and Integration Tests

Este projeto demonstra como construir uma API simples de pedidos usando **Node.js**, **Express**, **TypeScript** e **Jest**. O projeto foi desenvolvido durante um meetup com hands-on, onde foi apresentada a facilidade e a importância dos testes de integração e unidade para garantir a qualidade do código.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superset de JavaScript para uma melhor experiência de desenvolvimento.
- **Jest**: Framework de testes para testes unitários e de integração.
- **Supertest**: Biblioteca para realizar testes de integração em APIs HTTP.

## Estrutura do Projeto
- `src/index.ts`: Arquivo principal onde a API é configurada e as rotas são definidas.
- `src/orderRepository.ts`: Repositório que gerencia a criação, leitura, atualização e exclusão de pedidos.
- `src/orderService.ts`: Testes de integração para garantir que a API esteja funcionando corretamente.
- `src/jest.config.js`: Configuração do Jest.
- `tsconfig.json`: Configuração do TypeScript.

## Funcionalidades da API
- **POST /orders**: Cria um novo pedido.
- **GET /orders**: Lista todos os pedidos.
- **GET /orders/:id**: Retorna um pedido específico pelo ID.
- **PUT /orders/:id**: Atualiza um pedido existente.
- **DELETE /orders/:id**: Exclui um pedido existente.

## Como Rodar o Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/wellingtoong/order-api-with-tests.git
    cd order-api-with-tests
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Compile o TypeScript:

    ```bash
    npm run build
    ```

4. Execute a API:

    ```bash
    npm start
    ```

   O servidor estará rodando em `http://localhost:4000`.

## Como Executar os Testes

1. Para rodar os testes de unidade:

    ```bash
    npm run test
    ```

2. Para rodar os testes em modo de observação:

    ```bash
    npm run test:watch
    ```

3. Para rodar os testes com cobertura de código:

    ```bash
    npm run test:coverage
    ```

## Contribuições

Se você encontrar algum bug ou tiver sugestões de melhorias, fique à vontade para abrir uma **issue** ou **pull request**.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.