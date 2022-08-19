describe('Sign in', () => {
  it('form should works!', () => {
    cy.visit('http://localhost:3000/auth/sign-in')
    cy.get('input[name="email"]').type('Alefrank.m@gmail.com')
    cy.get('input[name="password"]').type('1234567')
    cy.get('[type="submit"]').click()
    cy.on('window:alert', (t) => {
      expect(t).to.contains('Incorrect password!')
    })
  })
})
