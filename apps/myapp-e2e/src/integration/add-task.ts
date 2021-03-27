describe('AddTaskComponent',() => {
    beforeEach(() => {
        cy.visit('/dashboard');
        cy.url().should('contain','dashboard');
        cy.get('#add-task').click();
    });

    it('test case 1', () => {
        cy.get('#mat-dialog-0');
        cy.get('h3').contains("Enter the task description here");
        cy.get('#text');
        cy.get('#dialog-button').contains("Submit");
    });

    it('test case 2',() => {
        cy.get('#dialog-button').click();
        cy.visit('/dashboard');
    })
})