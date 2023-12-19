import IssueModal from "../../pages/IssueModal";

it("Test Case 2: Issue Deletion Cancellation", () => {
  // Visit the homepage
  cy.visit("/");

  // Click the button to create a new issue
  cy.get('[data-testid="icon:plus"]').trigger("click");

  // Fill in issue details
  cy.get(".ql-editor").type("Metsavennad clani kokkusaamine 2k24"); // Description
  cy.get('[data-testid="select:type"]').click(); // Issue type
  cy.get('[data-testid="select-option:Bug"]').trigger("click");
  cy.get('[data-testid="form-field:title"]').type("Metsavennad"); // Title
  cy.get('[data-testid="select:userIds"]').click(); // Assignee1
  cy.get('[data-testid="select-option:Pickle Rick"]').trigger("click");
  cy.get('[data-testid="select:userIds"]').click(); //Assgnee 2
  cy.get('[data-testid="select-option:Lord Gaben"]').trigger("click");
  cy.get('[data-testid="select:reporterId"]').click(); // Reporter
  cy.get('[data-testid="select-option:Baby Yoda"]').trigger("click");
  cy.get('[data-testid="select:priority"]').click(); // Priority
  cy.get('[data-testid="select-option:Lowest"]').trigger("click");
  cy.get('button[type="submit"]').click(); // Press create issue

  // Ensure modal window is closed and successful message is visible
  cy.get('[data-testid="modal:issue-create"]').should("not.exist");
  cy.contains("Issue has been successfully created.").should("be.visible");

  // Reload the page and verify the successful message disappearance
  cy.reload();
  cy.contains("Issue has been successfully created.").should("not.exist");

  // Find the recently created issue and attempt to delete it
  cy.contains('[data-testid="list-issue"]', "Metsavennad").click();
  cy.get('[data-testid="icon:trash"]').click();

  // Click on cancel within the delete confirmation dialog
  cy.contains("Cancel").click();

  //close modal
  IssueModal.closeDetailModal();

  //Issue is visible on the board
  IssueModal.ensureIssueIsVisibleOnBoard;
});
