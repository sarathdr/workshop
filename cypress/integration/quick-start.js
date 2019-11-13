context('Quick start', () => {
  it('open demo', () => {
    cy.visit('/');
    cy.get('body').contains('workshop app is running!');
    cy.get('.toolbar').contains('Welcome');

  });

});
