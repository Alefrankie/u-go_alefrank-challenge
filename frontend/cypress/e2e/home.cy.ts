describe('home', () => {
  it('all should works!', () => {
    cy.visit('http://localhost:3000/auth/sign-in')
    cy.get('input[name="email"]').type('Alefrank.m@gmail.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('[type="submit"]').click()

    cy.visit('http://localhost:3000')
    cy.get('input[name="origin"]').type('Caracas')
    cy.get('[name="destination"]').type('Ciudad de Mexico')
    cy.get('[name="budget"]').clear().type('200')
    cy.get('[type="submit"]').click()
  })
})
