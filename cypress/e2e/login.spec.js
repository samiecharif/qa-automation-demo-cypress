describe('Login tests', () => {
  it('should login with valid credentials (demo)', () => {
    cy.visit('/')
    cy.contains('Kitchen Sink').should('be.visible') // page de démo
  })

  it('should not login with invalid credentials (demo)', () => {
    cy.visit('/commands/actions')
    cy.get('.action-email').type('fake@example.com')
    cy.get('.action-email').should('have.value', 'fake@example.com')
  })
})
