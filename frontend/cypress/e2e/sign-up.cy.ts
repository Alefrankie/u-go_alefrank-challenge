describe('Sign up', () => {
  it('form should works!', () => {
    cy.visit('http://localhost:3000/auth/sign-up')
    cy.get('input[name="fullName"]').type('Alefrank')
    cy.get('input[name="email"]').type('Alefrank.m@gmail.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('[type="submit"]').click()
    cy.on('window:alert', (t) => {
      expect(t).to.contains('User already registered!')
    })
  })
})
