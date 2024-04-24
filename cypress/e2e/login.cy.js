describe('Test suite github action', () => {
    it('should login successfully', () => {
      cy.visit('https://practice.automationtesteracademy.com/')
      cy.get('[data-test="username-login"]').type('login_user')
      cy.get('[data-test="password-login"]').type('cypress-geek')
      cy.get('[data-test="submit-login"]').click()
      cy.get('.MuiPaper-root').should('have.length', 8)
    })
  })