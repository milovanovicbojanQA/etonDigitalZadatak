import Selectors from './Selectors';

export default class HomePage {
    static visit() {
        cy.visit('https://www.holycode.com/'); // Poseti Holycode stranicu
    }

    static openPositions() {
        // Scroll do dugmeta i klik na njega
        return cy.get(Selectors.openPositionsButton)
            .scrollIntoView()
            .should('be.visible')
            .click() // Klikni na "Open Positions"
    }

    static handleCookies() {
        // Klik na "Allow all" ako je dugme vidljivo
        cy.get(Selectors.acceptCookiesButton, { timeout: 10000 }).then(($btn) => {
            if ($btn.is(':visible')) {
                cy.wrap($btn).click(); // Klikni na dugme

            }
        });
    }

    static checkPageTitle() {
        cy.get(Selectors.pageTitle, { timeout: 3000 }) // Povećan timeout za mrežna kašnjenja
            .should('be.visible') // Proveri da je naslov vidljiv
            .then(($title) => {
                // Proveri tekst naslova
                expect($title).to.have.text('Tech Solutions to scale');
            })
    }

}
