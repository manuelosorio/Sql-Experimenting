describe('API Testing with Cypress', () => {
  it('successfully loads', () => {
    cy.request('/api/example/1');
  });
  it('Validate the Header', () => {
    cy.request('GET', '/api/example/1')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });

  it('Validate the status code', () => {
    cy.request('GET', '/api/example/1').its('status').should('equal', 200);
  });

  it("Validate the person's name", () => {
    cy.request('GET', '/api/example/1')
      .its('body')
      .should('include', { name: 'Manuel' });
  });
  it("Validate the person's age", () => {
    cy.request('GET', '/api/example/1')
      .its('body')
      .should('include', { age: 24 });
  });
});
