describe("ASSIGNMENT 2: ADD AUTOMATION TESTS FOR TIME TRACKING FUNCTIONALITY", () => {
  const getIssueDetailsModal = () =>
    cy.get('[data-testid="modal:issue-details"]');
  it("Time Estimation Functionality:", () => {
    cy.visit("/");
    cy.contains(
      '[data-testid="list-issue"]',
      "You can use rich text with images in issue descriptions."
    )
      .should("be.visible")
      .click();
    //Adding estimation
    cy.get('[placeholder="Number"]').should("be.visible").clear().type(69);

    //Asserting that the estimation is added and visible
    cy.get("div").contains(69).should("be.visible");

    //Editing the estimation
    cy.get('[placeholder="Number"]').should("be.visible").clear().type(420);

    //Asserting that the updated value us visible
    cy.get("div").contains("420h estimated").should("be.visible");

    //Removing the estimation
    cy.get('[placeholder="Number"]').should("be.visible").clear();

    //Asserting that the value is removed
    cy.get("div").contains("420h estimated").should("not.exist");
  });
});

it.only("Time Logging Functionality:", () => {
  cy.visit("/");
  cy.contains(
    '[data-testid="list-issue"]',
    "You can use rich text with images in issue descriptions."
  )
    .should("be.visible")
    .click();
  cy.get('[placeholder="Number"]')
  .should("be.visible").clear().type(69);
  cy.get("div").contains(69).should("be.visible");
  cy.get('[placeholder="Number"]')
  .should("be.visible").clear().type(420);
  cy.get("div").contains("420h estimated")
  .should("be.visible");
  cy.get('[data-testid="icon:stopwatch"]')
  .should("be.visible").click();

  cy.get("div").contains(4).should("be.visible")

  cy.get('#timeSpent').clear().type(2323)
  //Cover time-logging functionality based on the given test cases.
  //You can combine test cases into one automation test as before.
});
