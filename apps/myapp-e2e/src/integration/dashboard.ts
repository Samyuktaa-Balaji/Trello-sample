describe('DashboardComponent', () => {
    beforeEach(() => {
      cy.visit("/dashboard");
    });

    it('test case 1', () => {
      cy.get('p').contains("Dashboard");
      cy.get('.mat-toolbar');
      cy.get('.header-tools>button>.mat-icon').contains("edit");
    });

    it('test case 2',() => {
      cy.get('.card').should('have.length',4);
      cy.get('.mat-card-header').should('have.length',4);
      cy.get('.mat-card-content').should('have.length',4);
      cy.get('.space').should('have.length',3);
      cy.get('.main-action').contains('Add Task');
    });

    it('test case 3', () => {
      cy.get(':nth-child(1) > .mat-card-header > .mat-card-header-text > .mat-card-title').contains('To do');
      cy.get(':nth-child(3) > .mat-card-header > .mat-card-header-text > .mat-card-title').contains('Doing');
      cy.get(':nth-child(5) > .mat-card-header > .mat-card-header-text > .mat-card-title').contains('Q&A Review');
      cy.get(':nth-child(7) > .mat-card-header > .mat-card-header-text > .mat-card-title').contains('Done');
    });

    it('test case 4',() => {
      cy.get('#cdk-drop-list-0 > :nth-child(1) > .mat-card > span');
      cy.get('#cdk-drop-list-0 > :nth-child(1) > .mat-card > .mat-card-actions > #edit');
      cy.get('#edit > .mat-icon').contains('create');
      cy.get('#cdk-drop-list-0 > :nth-child(1) > .mat-card > .mat-card-actions > #delete');
      cy.get('#delete > .mat-icon').contains('delete');
    });

    it('test case 5',() => {
      cy.get('#cdk-drop-list-1 > :nth-child(1) > .mat-card > span');
      cy.get('#cdk-drop-list-2 > :nth-child(1) > .mat-card > span');
      cy.get('#cdk-drop-list-3 > :nth-child(1) > .mat-card > span');
    });

    it('test case 6', () => {
      cy.get('#cdk-drop-list-0 > :nth-child(1)').then(el => {
        const draggable = el[0] 
        cy.get('#cdk-drop-list-1 > :nth-child(2)').then(el => {
          const droppable = el[0]  
      
          const coords = droppable.getBoundingClientRect()
          draggable.dispatchEvent(new MouseEvent('mousemove'));
          draggable.dispatchEvent(new MouseEvent('mousedown'));
          draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
          draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: coords.x+10, clientY: coords.y+10}));
          draggable.dispatchEvent(new MouseEvent('mouseup'));
      
        });      
        cy.get('#cdk-drop-list-1').should('contain', 'Get to work');
        cy.get('#cdk-drop-list-1 > .cdk-drag').should('contain', 'Get to work');
      });
  });
});