// open using npx cypress open
// run in terminal using npx cypress run

describe('Secret Number Game Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500')
  })

  it('loads the game', () => {
    cy.get('#startGameButton').should('be.visible');
    cy.get('#gameContainer').should('not.be.visible');
  })

  it('returns a result when user submits a guess', () => {
    cy.get('#startGameButton').click();
    cy.get('#guessInput').type('50');
    cy.get('#guessForm').submit();
    cy.get('#feedback').should('not.be.empty')
  })

})



