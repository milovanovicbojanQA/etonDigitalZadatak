import Selectors from './Selectors';

export default class CareersPage {
    static filterByPosition() {
        cy.get(Selectors.qaButton).scrollIntoView().click(); // Klik na dugme QA
    }

    static filterByLocation() {
        cy.get(Selectors.locationSerbia).scrollIntoView().click(); // Klik na dugme Serbia
    }

    static loadMorePositions() {
        cy.get(Selectors.showMoreButton).scrollIntoView().click(); // Klik na dugme "Show More" 
    }

    static checkTeamForPosition(position, team) {
        cy.contains(Selectors.jobTitle, position) // Pronađi poziciju
            .scrollIntoView()
            .parent() // Idi na roditeljski element
            .find('span') // Pronađi <span> unutar roditelja
            .should('contain.text', team); // Uveri se da sadrži tekst tima
    }

    static getAllJobTitles() {
        const jobTitlesArray = []; // Niz za skladištenje poslova

        const loadPositions = () => {
            // Učitaj više pozicija ako je dugme vidljivo
            cy.get(Selectors.showMoreButton, { timeout: 10000 }).then(($button) => {
                if ($button.is(':visible')) {
                    cy.wrap($button).scrollIntoView().click(); // Klikni na dugme "Show More"
                    cy.wait(2000); // Sačekaj da se pozicije učitaju
                    loadPositions(); // Rekurzivno pozovi da učita više pozicija
                } else {
                    // Kada dugme više nije vidljivo, prikupljamo sve nazive poslova
                    cy.get('body > main > div.c-section.c-section--careers > div') // Koristite vaš selektor
                        .find('h3') // Pronađi sve <h3> unutar izabranog elementa
                        .then(($titles) => {
                            const jobTitles = $titles.map((i, el) => Cypress.$(el).text()).get();
                            jobTitlesArray.push(...jobTitles); // Dodaj nazive u niz
                            return cy.writeFile('serbia-job-titles.txt', jobTitlesArray.join('\n')); // Zapiši sve nazive poslova u datoteku
                        });
                }
            });
        };

        loadPositions(); // Počni učitavanje pozicija




    }


}
