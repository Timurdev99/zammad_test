import response from '../fixtures/response.json'

describe('Output Page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://cors-anywhere.herokuapp.com/https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity',
      {
        fixture: 'response.json',
      },
    )
  })

  it('renders it', () => {
    cy.visit('/')
    cy.get('[data-testid=btnOutput]').should('exist').click()
    cy.wait(2000)
    cy.get('[data-testid=dataCard]').should('have.length', response.length)
    cy.get('[data-testid=btnViewMore]').first().click()
    cy.wait(2000)
    cy.get('[data-testid=dataTitle]')
      .should('exist')
      .should('include.text', 'Payday 2: Free In-game Items Giveaway')
    cy.get('[data-testid=btnModalClose]').click()
    cy.get('[data-testid=dataTitle]').should('not.exist')
  })
})
