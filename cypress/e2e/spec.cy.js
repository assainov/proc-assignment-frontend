/// <reference types="cypress" />
describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.visit('/');
  });
});

describe('Search for a SW character', () => {
  it('should search for a character', () => {
    cy.visit('/');
    cy.get('input').type('Luke Skywalker');
    cy.get('[data-test="Luke Skywalker"]').click();
    cy.get('[data-test="name"]').should('have.text', 'Luke Skywalker');
    cy.get('[data-test="hair_color"]').should('have.text', 'blond');
  });
});