describe('DashboardComponent', () => {
    beforeEach(() => {
      cy.visit("/dashboard");
    });

    it('test case 1', () => {
      cy.get('p').contains("Dashboard");
      cy.get('.mat-toolbar');
      cy.get('.header-tools>button>.mat-icon').contains("edit");
    });
});