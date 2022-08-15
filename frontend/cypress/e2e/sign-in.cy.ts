describe('home', () => {
  it('form should works!', () => {
    cy.visit('http://localhost:3000/auth/sign-in')
    cy.get('input[name="email"]').type('Alefrank.m@gmail.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('[type="submit"]').click()
  })
})
