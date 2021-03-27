describe('AppComponent', () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it('test cases', () => {
      cy.get('p').contains("Dashboard");
      cy.get('.mat-icon');
      cy.get('.mat-toolbar');
      cy.get('button').click();
      cy.url().should('contain','/login');
    });
  });
  