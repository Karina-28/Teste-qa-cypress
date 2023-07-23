# Teste-qa-cypress-e-inscrição
Repositório contém um teste de check-out em cypress básico.


TESTE CASE:
1. Usuário entra na página da aplicação através do link https://checkout.einscricao.app//?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev;
2. Clica no botão “+”, e adiciona uma unidade no carrinho;
3. Clica no botão “Continuar” e prossegue para a tela de cadastro ou login de conta;
4. Clica em “Continuar sem conta” e avança para a tela de formulário de dados do
participante;
5. Preenche o formulário com o Nome, Tipo de documento CPF, Número do documento e
email, com entradas válidas;
6. Clica em “Finalizar”;
7. Clica em “Salvar comprovante”.



- INSTALANDO O CYPRESS
1. Instalar o Node JS https://nodejs.org/pt-br/download;
2. Instalar o NPM (já vem com o node)
3. Instalar o Visual Studio Code https://code.visualstudio.com/download
4. Crie uma pasta com o nome do seu projeto e inicie um console para executar o comando: npm init –y. Ele criará o arquivo package.json
5. Abra o VSCode pelo console utilizando: code .
6. Abra o terminal do VScode e digite: npm install cypress, para instalar o cypress no projeto
7. No arquivo package.json "scripts", adicione: "cypress:open":"cypress open"
8. Abra o cypress com: npx cypress open no terminal



- PARA VERIFICAR SE TUDO ESTÁ INSTALADO...
  Digite no prompt de comando:
  
git --version

node --version 

npm --version 



-PARA CRIAR UM ARQUIVO DE TESTE DENTRO DO PROJETO NO VSCODE

- Adicione um arquivo com o nome do seu teste e com a extensão .cy.js dentro da pasta cypress>e2e
 ![image](https://github.com/Karina-28/Teste-qa-cypress/assets/117238425/1c86811c-8617-42e5-981e-297d821d47be)



  
    
