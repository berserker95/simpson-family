describe('My First Test', () => {
    it('Find an element', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
    })
  })