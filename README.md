# Teste-qa-cypress
Repositório contém um teste de check-out em cypress básico.

TESTE CASE:
1. Usuário entra na página da aplicação através do link;
2. Clica no botão “+”, e adiciona uma unidade no carrinho;
3. Clica no botão “Continuar” e prossegue para a tela de cadastro ou login de conta;
4. Clica em “Continuar sem conta” e avança para a tela de formulário de dados do
participante;
5. Preenche o formulário com o Nome, Tipo de documento CPF, Número do documento e
email, com entradas válidas;
6. Clica em “Finalizar”;
7. Clica em “Salvar comprovante”.


- INSTALANDO O CYPRESS
1. Instalar o NodeJS https://nodejs.org/pt-br/download;
2. Instalar o NPM (já vem com o node)
3. Instalar o Visual Studio Code https://code.visualstudio.com/download
4. Instalar o arquivo package.Json do projeto pelo prompt de comando utilizando: npm init -y
5. Abrir o VSCode pelo prompt de comando utilizando: code .
6. No arquivo package.json adicionar: "cypress:open":"cypress open"
7. Abrir o terminal no VScode e digitar: npm install cypress
8. Aguarde a instalação do cypress
9. Abra o cypress com: npx cypress open no terminal
