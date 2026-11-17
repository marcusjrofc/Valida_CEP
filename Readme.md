# 📍 Validador e Buscador de CEP

Uma aplicação web simples e responsiva que permite ao utilizador procurar por um Código de Endereçamento Postal (CEP) brasileiro e devolve automaticamente os dados do endereço (Rua, Cidade e Estado).

## 🚀 Funcionalidades

- Validação da entrada de dados (apenas CEPs com exatamente 8 números).
- Consumo de API externa de forma assíncrona.
- Tratamento de erros para CEPs inexistentes ou falhas de rede.
- Renderização dinâmica dos resultados no ecrã (DOM) via JavaScript.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização do cartão, inputs e botões, focando numa interface limpa e moderna.
- **JavaScript (ES6+):** Lógica de validação, manipulação do DOM e requisições assíncronas (`async/await` e `fetch`).
- **[ViaCEP API](https://viacep.com.br/):** API pública e gratuita para consulta de CEPs.

## ⚙️ Como executar o projeto

1. Faça o clone deste repositório ou descarregue os ficheiros.
2. Abra o ficheiro `index.html` diretamente no seu navegador web.
3. *Em alternativa*, se estiver a utilizar o VS Code, pode abrir o projeto com a extensão **Live Server** para ver as alterações em tempo real.

## 💡 Como funciona

1. O utilizador digita um CEP válido (ex: `01001000`).
2. O sistema remove quaisquer caracteres que não sejam números e valida se existem exatamente 8 dígitos.
3. É feita uma requisição à API do ViaCEP.
4. Se o CEP for encontrado, o JavaScript cria dinamicamente os campos com a Rua, Cidade e Estado e exibe-os na página. Em caso de erro, é apresentado um alerta.

---
Desenvolvido como projeto prático de consumo de APIs e manipulação de DOM com JavaScript.