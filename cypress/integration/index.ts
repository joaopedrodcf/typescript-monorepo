describe('Integration test example', () => {
    it('Opens correctly the home page', () => {
        cy.visit('http://localhost:8080');
    });

    it('Opens correctly the about page', () => {
        cy.visit('http://localhost:8080/about');
    });

    it('Opens correctly the contacts page', () => {
        cy.visit('http://localhost:8080/contacts');
    });

    it('Opens correctly the not found page', () => {
        cy.visit('http://localhost:8080/i-will-go-to-a-not-found');
    });
});
