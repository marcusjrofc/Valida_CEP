# 📍 Buscador e Validador de CEP

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
</p>

Uma aplicação web simples, rápida e responsiva que permite ao usuário buscar por qualquer CEP (Código de Endereçamento Postal) do Brasil, retornando automaticamente os dados de endereço completo na tela.

🌐 **Acesse o projeto online:** [Clique aqui para testar!](https://validacep.vercel.app)

---

## 🚀 Funcionalidades

- ✨ **Preenchimento Dinâmico:** Retorna automaticamente Rua, Bairro, Cidade, Estado e DDD.
- 🎭 **Máscara em Tempo Real:** Formata o CEP automaticamente (00000-000) enquanto o usuário digita.
- 🛡️ **Validação Inteligente:** Limpa caracteres especiais, valida o formato correto e garante o envio correto dos dados para a API.
- ⚡ **Consumo de API Externa:** Requisições assíncronas modernas.
- ⚠️ **Tratamento de Erros:** Exibe alertas amigáveis caso o CEP digitado não exista ou haja falhas de rede.
- 📱 **Interface Responsiva:** Design limpo, focado na experiência do usuário em qualquer dispositivo.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando apenas o ecossistema base da web, sem frameworks adicionais:

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização dos cards, inputs e botões com foco em uma interface limpa e amigável (UI/UX).
- **JavaScript (ES6+):** Lógica de validação, manipulação direta do DOM, eventos em tempo real (`addEventListener`) e requisições HTTP (`async/await` e `fetch API`).
- **[ViaCEP API](https://viacep.com.br/):** API pública e gratuita utilizada para a consulta dos dados de endereço.

## ⚙️ Como executar o projeto localmente

Se desejar rodar o projeto na sua própria máquina, o processo é bem simples:

1. Faça o clone deste repositório ou baixe os arquivos (Download ZIP):
   ```bash
   git clone [https://github.com/marcusjrofc/Valida_CEP.git](https://github.com/marcusjrofc/Valida_CEP.git)
