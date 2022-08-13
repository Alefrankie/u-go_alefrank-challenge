describe('home', () => {
  it('form should works!', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="from"]').type('Caracas')
    cy.get('[name="to"]').type('Ciudad de Mexico')
    cy.get('[name="budget"]').clear().type('200')
    cy.get('[type="submit"]').click()
  })
})
