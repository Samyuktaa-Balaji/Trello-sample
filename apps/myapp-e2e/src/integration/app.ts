describe('AppComponent', () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it('test case 1', () => {
      cy.get('p').contains("Dashboard");
      cy.get('.mat-icon');
      cy.get('.mat-toolbar');
      cy.get('button').click();
      cy.url().should('contain','/login');
    });
  });
  