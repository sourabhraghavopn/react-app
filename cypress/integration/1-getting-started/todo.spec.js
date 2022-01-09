/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("HOST"));
  });

  it("displays two todo items by default", () => {
    cy.get(".container");
    cy.get("#simple-tab-1").click();
  });
});
