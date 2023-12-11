//create an issue
cy.get('[data-testid="modal:issue-create"]').within(() => {
      
    //open issue type dropdown and choose Story
    cy.get('[data-testid="select:type"]').click();
    cy.get('[data-testid="select-option:Story"]')
        .trigger('click');
          
    //Type value to description input field
    cy.get('.ql-editor').type('TEST_DESCRIPTION');

    //Type value to title input field
    //Order of filling in the fields is first description, then title on purpose
    //Otherwise filling title first sometimes doesn't work due to web page implementation
    cy.get('input[name="title"]').type('TEST_TITLE');
    
    //Select Lord Gaben from reporter dropdown
    cy.get('[data-testid="select:userIds"]').click();
    cy.get('[data-testid="select-option:Lord Gaben"]').click();

    //Click on button "Create issue"
    cy.get('button[type="submit"]').click();
  
  
  
  
  
  
  
  
  // Click the delete button to initiate deletion
  cy.get('[data-testid="delete-issue-button"]').click();

  // Confirm the deletion (if a confirmation dialog appears)
  // Replace this with your application's confirmation handling logic
  cy.get('[data-testid="confirm-deletion-button"]').click();

  // Assert that the deletion confirmation dialogue is not visible
  cy.get('[data-testid="deletion-confirmation-dialog"]').should('not.exist');

  // Assert that the issue is deleted and no longer displayed on the Jira board
  cy.get('[data-testid="deleted-issue"]').should('not.exist');





  it('delete created issue', () => {
    cy.get('[data-testid="list-issue"]');
    cy.get('[data-testid="select:Ermo"]')
    .trigger('click')
  });