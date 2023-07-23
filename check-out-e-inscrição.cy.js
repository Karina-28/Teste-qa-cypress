describe("Teste de checkout", () => {
  it("Realiza o processo de checkout com sucesso", () => {

    // Passo 1
    cy.visit("https://checkout.einscricao.app/tickets");

    // Passo 2
    cy.get('MuiSvgIcon-root').click();

    // Passo 3
    cy.get('MuiButton - label').click();

    // Passo 4
    cy.get('MuiButton-label-253').click();

    // Passo 5
    cy.get("MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense Mui-required Mui-required").type("Karina Januario");
    //cy.get('input[name="nome"]').type("Karina Januario");

    //cy.get('input[name="cpf"]').type("123.456.789-00");
    cy.get("MuiSelect - root MuiSelect - select MuiInputBase - input MuiInput - input MuiInputBase - inputMarginDense MuiInput - inputMarginDense").type("414.605.788-48");

    cy.get("MuiInputBase - input MuiInput - input MuiInputBase - inputMarginDense MuiInput - inputMarginDense").type("41460578848");

    // cy.get('input[name="email"]').type("karinajanuario28@hotmail.com");
    cy.get("MuiInputBase - input MuiInput - input MuiInputBase - inputMarginDense MuiInput - inputMarginDense").type("karinajanuario28@hotmail.com");

    // Passo 6
    cy.contains("MuiButton - label").click();

    // Passo 7
    cy.get("MuiBox - root jss536").should();
    cy.contains("MuiButton - label").click();

  });
});
