# Projeto: learning_context

Este projeto demonstra como utilizar o Context API do React para gerenciar estados globais em um app React Native. Aqui, simulamos um app bancário simples, onde o usuário pode fazer login, visualizar seu saldo e realizar um empréstimo.

## Principais conceitos abordados
- **Context API:** Compartilhamento de dados globais (usuário, saldo, empréstimo) entre componentes.
- **Componentização:** Separação de responsabilidades em componentes como `TopBar`, `InfoDaConta` e `HomeScreen`.
- **Hooks:** Uso de `useContext` e `useState` para manipulação de estado.

## Como funciona
- O contexto `UserContext` armazena informações do usuário, saldo e funções para atualizar esses dados.
- A tela principal (`HomeScreen`) permite simular um login e exibe o saldo do usuário.
- O layout utiliza componentes visuais customizados e estilização inspirada em apps bancários.

> **Dica:** Explore o código do contexto em `src/contexts/UserContext.js` para entender como estados globais podem ser compartilhados entre componentes. 