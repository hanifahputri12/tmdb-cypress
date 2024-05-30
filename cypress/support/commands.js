Cypress.Commands.add("isScrolledTo", { prevSubject: true }, (element) => {
    cy.get(element).should(($el) => {
        const bottom = Cypress.$(cy.state("window")).height();
        const rect = $el[0].getBoundingClientRect();

        expect(rect.top).not.to.be.greaterThan(bottom, `Expected element not to be below the visible scrolled area`);
        expect(rect.top).to.be.greaterThan(0 - rect.height, `Expected element not to be above the visible scrolled area`)
    });
});

Cypress.Commands.add("login", (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
});
