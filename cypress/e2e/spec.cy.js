describe('ikea check', () => {
  it('visit ikea', () => {
    cy.visit('https://www.ikea.com/pl/pl/')
    cy.contains('Akceptuj wszystkie cookies').click()
    cy.get('[type="search"]')
      .type('biurko')
      .should('have.value', 'biurko')
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/search/products')
    cy.get('[id="PRICE"]').click()
    cy.get('[class="class-filter__item class-filter__item--PRICE_80000_2147483647"]').find('[type="checkbox"]').check()
    cy.get('[id="PRICE"]').click()
    cy.get('[id="COLOR"]').click()
    cy.get('[class="class-filter__item class-filter__item--10007"]').find('[type="checkbox"]').check()
    cy.get('[id="COLOR"]').click()
    
    //TODO: define how to click first element and add to card
  })
})