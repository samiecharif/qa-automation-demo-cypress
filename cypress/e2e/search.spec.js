describe('Search feature (demo)', () => {
  it('should navigate to querying page', () => {
    cy.visit('/')
    cy.contains('Querying').click()
    cy.url().should('include', '/commands/querying')
  })
})
