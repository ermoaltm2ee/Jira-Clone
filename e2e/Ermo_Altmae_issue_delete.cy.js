describe('Issue Deletion', () => {
beforeEach(() => {
cy.visit('/');
cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
cy.visit(url + '/board');
});
});
//create issue
it('Test Case 1: Issue Deletion', () => {
cy.visit('/');
cy.get('[data-testid="icon:plus"]').trigger('click')
//Description
cy.get('.ql-editor').type('Ermo Description')
//Issue type
cy.get('[data-testid="select:type"]').click()
cy.get('[data-testid="select-option:Bug"]').trigger('click');
//Title
cy.get('[data-testid="form-field:title"]').type('Ermo Bug')
//Assignees
cy.get('[data-testid="select:userIds"]').click();
cy.get('[data-testid="select-option:Pickle Rick"]').trigger('click')
//Reporter
cy.get('[data-testid="select:reporterId"]').click();
cy.get('[data-testid="select-option:Baby Yoda"]').trigger('click')
//Priority
cy.get('[data-testid="select:priority"]').click();
cy.get('[data-testid="select-option:Lowest"]').trigger('click');
//Press create issue
cy.get('button[type="submit"]').click();
//modal window is closed and successful message is visible
cy.get('[data-testid="modal:issue-create"]').should('not.exist');
cy.contains('Issue has been successfully created.').should('be.visible');
//Reload the page
//successful message has dissappeared after the reload
cy.reload();
cy.contains('Issue has been successfully created.').should('not.exist');
cy.contains('[data-testid="list-issue"]', 'Ermo').click();
cy.get('[data-testid="icon:trash"]').click()
cy.contains('Delete issue').click();
});
})

it.only('Test Case 2: Issue Deletion Cancellation', () => {
  cy.visit('/');
cy.get('[data-testid="icon:plus"]').trigger('click')
//Description
cy.get('.ql-editor').type('Metsavennad')
//Issue type
cy.get('[data-testid="select:type"]').click()
cy.get('[data-testid="select-option:Bug"]').trigger('click');
//Title
cy.get('[data-testid="form-field:title"]').type('Metsavennad 2023')
//Assignees
cy.get('[data-testid="select:userIds"]').click();
cy.get('[data-testid="select-option:Baby Yoda"]').trigger('click')
//Reporter
cy.get('[data-testid="select:reporterId"]').click();
cy.get('[data-testid="select-option:Pickle Rick"]').trigger('click')
//Priority
cy.get('[data-testid="select:priority"]').click();
cy.get('[data-testid="select-option:Low"]').trigger('click');
//Press create issue
cy.get('button[type="submit"]').click();
//modal window is closed and successful message is visible
cy.get('[data-testid="modal:issue-create"]').should('not.exist');
cy.contains('Issue has been successfully created.').should('be.visible');
//Reload the page
//successful message has dissappeared after the reload
cy.reload();
cy.contains('Issue has been successfully created.').should('not.exist');
cy.contains('[data-testid="list-issue"]', 'Metsavennad 2023').click();
cy.get('[data-testid="icon:trash"]').click();
cy.contains('Cancel').click();
//close icon
cy.get('[data-testid="icon:close"]').eq(0).click();
});

  
