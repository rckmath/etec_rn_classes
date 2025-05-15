# Projeto: learning_async_storage_and_router

Este projeto demonstra como utilizar o Context API do React para gerenciar estados globais em um app React Native, além de explorar o roteamento com Expo Router (file-based routing) e práticas de UI dinâmica. O app simula um banco digital, permitindo login, visualização de saldo, solicitação de empréstimo e navegação por abas.

## Principais conceitos abordados
- **Context API:** Compartilhamento de dados globais (usuário, saldo, empréstimo) entre componentes.
- **Expo Router:** Navegação baseada em arquivos, com estrutura de rotas por pastas e arquivos (`app/(tabs)/home.js`, etc.).
- **Componentização:** Separação de responsabilidades em componentes como `TopBar`, `InfoDaConta`, `ConfirmaEmprestimo` e `NubankButton`.
- **Hooks:** Uso de `useContext` e `useState` para manipulação de estado.
- **AsyncStorage:** Persistência de dados localmente no dispositivo; nos garantirá permanecermos logado mesmo após fechar e reabrir o app.
- **UI Dinâmica:** Exemplo: a cor do saldo muda para vermelho se for negativo e verde se for positivo.

## Como funciona
- O contexto `UserContext` armazena informações do usuário, saldo e funções para atualizar esses dados.
- A tela principal (`home.js` na pasta `(tabs)`) permite simular um login e exibe o saldo do usuário, mudando a cor conforme o valor.
- O usuário pode solicitar um empréstimo, que altera o saldo e exibe um modal de confirmação.
- A navegação é feita por abas, utilizando o Expo Router para organizar as telas.

> **Dica:** Explore o código do contexto em `app/contexts/user.context.js` e a navegação em `app/(tabs)/_layout.js` para entender como estados globais e rotas são compartilhados e organizados. 