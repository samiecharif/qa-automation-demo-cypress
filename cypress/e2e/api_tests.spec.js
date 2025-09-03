describe('API tests', () => {
  it('GET users returns 200', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
      .its('status')
      .should('eq', 200)
  })
})
