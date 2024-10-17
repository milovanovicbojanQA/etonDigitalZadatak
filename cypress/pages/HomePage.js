import Selectors from './Selectors';

export default class HomePage {
  static visit() {
    cy.visit('https://www.holycode.com/'); // Poseti Holycode stranicu
  }

//   static clickCareersDropdown() {
//     //this.handleCookies(); // Pobrini se da se kolačići prihvate
    
//     // Hover na Career meni
//     cy.get(Selectors.careersDropdown)
//       .should('be.visible')
//       //.trigger('mouseover'); // Simuliraj hover
//       .click();
//       cy.wait(2000);
  
//     // Sačekaj da se "Open Positions" učita i klikni na njega
//     cy.get(Selectors.careersLink)
//       .should('be.visible')
//       .click(); // Klikni na Open Positions
//   }

static openPositions() {
    // Scroll do dugmeta i klik na njega
    cy.get(Selectors.openPositionsButton)
      .scrollIntoView()
      .should('be.visible')
      .click(); // Klikni na "Open Positions"

    // Proveri da je otvoren odgovarajući URL
    //cy.url().should('include', '/careers'); // ili tačan URL sa eq
  }
  
  static handleCookies() {
    // Klik na "Allow all" ako je dugme vidljivo
    cy.get(Selectors.acceptCookiesButton, { timeout: 10000 }).then(($btn) => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click(); // Klikni na dugme

        // // Proveri da popup više ne postoji pre nastavka
        // cy.get(Selectors.acceptCookiesButton, { timeout: 5000 })
        //   .should('not.exist');
      }
    });
  }
  

  static checkPageTitle() {
    cy.get(Selectors.pageTitle).should('have.text', 'Tech Solutions to scale');
  }
}
