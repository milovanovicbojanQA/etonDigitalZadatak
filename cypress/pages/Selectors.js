const Selectors = {
    careersDropdown: 'span:contains("Career")', // Otvara dropdown meni
    careersLink: 'span:contains("Open positions")', // Link ka Careers stranici
    locationSerbia: '#28', // Dugme za lokaciju "Serbia"
    qaButton: '#26', // Dugme za poziciju "QA"
    jobTitle: '#resources-feed > div:nth-child(2) > h3', // Naslov pozicije
    showMoreButton: 'span.c-btn.load-more.paged', // Dugme za "Show More"
    filtersContainer: '.c-filters', // Kontejner za filtere
    pageTitle: 'h1.c-txt--hero.c-hero__title', // Naslov na HomePage
    acceptCookiesButton: 'button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', // Selektor za Accept All dugme
    //openPositionsButton: 'a.c-btn[href="https://www.holycode.com/careers/"]',
    openPositionsButton: 'a.c-btn:contains("View open positions")',
  };
  
  export default Selectors;
  