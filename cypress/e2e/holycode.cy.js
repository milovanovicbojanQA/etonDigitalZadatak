import HomePage from '../pages/HomePage';
import CareersPage from '../pages/CareersPage';

describe('Holycode Website Tests', () => {
    beforeEach(() => {
        // cy.viewport(1280, 800);
        cy.window().then((win) => {
            cy.viewport(win.innerWidth, win.innerHeight);  // Automatski prilagođava viewport
        });
        HomePage.visit();

    });

    it('Verifies homepage title', () => {
        //HomePage.visit();
        cy.wait(2000);
        HomePage.handleCookies();
        HomePage.checkPageTitle();
    });

    it('Navigates to Careers and checks QA team', () => {
        //HomePage.visit();
        cy.wait(2000);
        HomePage.handleCookies();
        cy.wait(2000);
        HomePage.openPositions();
        cy.wait(2000);
        CareersPage.filterByPosition();
        cy.wait(2000);
        CareersPage.checkTeamForPosition('Senior QA Developer/QA Team Lead', 'EtonDigital');
    });

    it('Filters positions for Serbia and logs titles', () => {
        //HomePage.visit();
        cy.wait(2000);
        HomePage.handleCookies();
        cy.wait(2000);
        HomePage.openPositions();
        cy.wait(2000);
        CareersPage.filterByLocation();
        cy.wait(2000);
        CareersPage.getAllJobTitles();
    });
});
