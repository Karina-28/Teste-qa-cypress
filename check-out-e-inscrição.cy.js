describe("Teste de checkout", () => {
  it("Realiza o processo de checkout com sucesso", () => {

    // Passo 1
    cy.visit("https://checkout.einscricao.app//?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev");

    // Passo 2
    cy.get('[tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click();

    // Passo 3
    cy.get('.MuiButton-label').click();

    // Passo 4
    cy.get(':nth-child(4) > .MuiButtonBase-root-279 > .MuiButton-label-253').click();

    // Passo 5
    cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type("Karina Januario");

    cy.get('.MuiSelect-root').select("CPF");

    cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("41460578848");

    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type("karinajanuario28@hotmail.com");

    // Passo 6
    cy.get('.MuiButton-label').click();

    // Passo 7
    cy.get('body').should();
    cy.get('[style="position: relative; display: inline-block; width: auto;"] > .MuiButtonBase-root > .MuiButton-label').click();

  });
});
