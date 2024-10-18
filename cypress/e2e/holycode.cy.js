import HomePage from '../pages/HomePage';
import CareersPage from '../pages/CareersPage';

describe('Holycode Website Tests', () => {
    beforeEach(() => {
        HomePage.visit();
        cy.window().then((win) => {
            cy.viewport(win.innerWidth, win.innerHeight);  // Automatski prilagođava viewport
        });
        cy.wait(2000);
        HomePage.handleCookies();

    });

    it('Verifies homepage title', () => {
        HomePage.checkPageTitle();
    });

    it('Navigates to Careers and checks Senior QA position team:etonDigital', () => {
        HomePage.openPositions();
        CareersPage.filterByPosition();
        CareersPage.checkTeamForPosition('Senior QA Developer/QA Team Lead', 'EtonDigital');
    });

    it('Filters positions for Serbia and logs titles', () => {
        HomePage.openPositions();
        CareersPage.filterByLocation();
        CareersPage.getAllJobTitles();
    });
});
