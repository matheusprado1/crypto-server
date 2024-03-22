# Servidor Proxy para Crypto View

## Visão Geral

Este servidor proxy foi desenvolvido para facilitar a comunicação entre a aplicação Crypto View e a API da CoinGecko, contornando restrições de CORS (Cross-Origin Resource Sharing). Utilizando o Express.js, o servidor proxy atua como um intermediário, fazendo requisições à API da CoinGecko em nome da aplicação e retornando os dados necessários.

## Configuração e Instalação

Para configurar e executar o servidor proxy, siga os passos abaixo:

1. **Copia do Projeto**:  Para clonar o repositório, use o comando: `git clone https://github.com/matheusprado1/crypto-view.git`

2. **Instalação das Dependências**: Certifique-se de que o Node.js está instalado em seu ambiente. Em seguida, clone o repositório do servidor proxy e instale as dependências necessárias com o comando `npm install`.

3. **Configuração da API Key**: No arquivo principal do servidor (server.js), configure a API Key da CoinGecko conforme mostrado no exemplo de código abaixo.

```
defaults.headers.common["x-cg-demo-api-key"] = "SUA_API_KEY_AQUI";
```


4. **Execução do Servidor**: Inicie o servidor proxy executando `node server.js` no terminal. O servidor iniciará na porta padrão (3001) ou na porta especificada na variável de ambiente `PORT`.

## Rotas Disponíveis

O servidor proxy fornece as seguintes rotas para interagir com a API da CoinGecko:

- **`/coins/markets`**: Retorna as top 10 criptomoedas por capitalização de mercado.
- **`/coins/:id`**: Retorna detalhes de uma criptomoeda específica pelo seu ID.
- **`/coins/:id/market_chart`**: Retorna dados para o gráfico de preços de uma criptomoeda específica pelo seu ID, com a opção de especificar o número de dias (padrão 7).
- **`/search/trending`**: Retorna criptomoedas em alta.

## Exemplo de Uso

Para utilizar o servidor proxy, faça requisições para as rotas disponíveis, substituindo `:id` pelo ID da criptomoeda desejada, se aplicável. Por exemplo, para buscar as top 10 criptomoedas por capitalização de mercado, a requisição seria feita para `http://localhost:3001/coins/markets`.

## Considerações Finais

Este servidor proxy é uma solução eficaz para contornar restrições de CORS ao trabalhar com APIs externas, como a CoinGecko API, em aplicações web. Ao utilizar este servidor, a aplicação Crypto View pode acessar os dados necessários sem enfrentar problemas de CORS, garantindo uma experiência de usuário suave e eficiente.

Para mais informações ou dúvidas, consulte o repositório do projeto em [https://github.com/matheusprado1/crypto-view](https://github.com/matheusprado1/crypto-view).


