describe('LoginComponent', () => {
    beforeEach(() => {
      cy.visit("/login");
    });

    let e = "Samyuktaa.Balaji@cat.com";
    let p = "123456789";

    it('test case 1', () => {
        cy.get('p').contains("Dashboard");
        cy.get('.mat-icon');
        cy.get('.mat-toolbar');
        cy.get('button').click();
    });

    it('test case 2', () => {
        cy.get('mat-card');
        cy.get('mat-card-content').should('contain','Username').and('contain','Password');
        cy.get('mat-icon');
        cy.get('mat-card-actions').contains("Submit");
    });

    it('test case 3', () => {
        cy.get("#username");
        cy.get("#pass");
    });

    it('test case 4',() => {
        cy.get("mat-form-field input").get("#email").type(e).should('have.value',e);
        cy.get("mat-form-field input").get("#password").type(p).should('have.value',p);
        cy.get('.mat-button-wrapper').click();
        cy.url().should('contain','/dashboard')
    });
  });