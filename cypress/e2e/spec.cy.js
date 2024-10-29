/// <reference types="cypress" />
describe('Unauthorized access', () => {
  it('should redirect to /signupwall', () => {
    cy.visit('/');

    cy.location('pathname').should('eq', '/signupwall');
  });
});

describe('Main flow', () => {
  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();
  const email = `cy-${id}@test.com`;
  const password = '12345';

  it('successfully signup and redirect to root', () => {
    cy.visit('/signup');

    cy.get('[data-test="firstname"]').type('Cy User ' + id);
    cy.get('[data-test="surname"]').type('Test');
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="confirmPassword"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.location('pathname').should('eq', '/');
    cy.get('[data-test="autocomplete"]').should('exist');
  });

  it('should search for a character', () => {
    cy.visit('/login');

    // Login
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Search for a character
    cy.location('pathname').should('eq', '/');
    cy.get('input').type('Luke Skywalker');
    cy.get('[data-test="Luke Skywalker"]').click();
    cy.get('[data-test="name"]').should('have.text', 'Luke Skywalker');
    cy.get('[data-test="hair_color"]').should('have.text', 'blond');
  });
});