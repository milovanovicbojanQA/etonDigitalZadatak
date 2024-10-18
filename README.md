
# Holycode Website Tests

This project contains automated tests for the Holycode website using Cypress. The tests cover key functionalities, including navigation, job filtering, and verifying page titles.

e2e


—holycode.cy.js



pages


—careersPage.js

—homePage.js

—selectors.js

## Table of Contents

- [Installation]
- [Setup Instructions]
- [How to Run Tests]
- [Test Cases]

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone the repository to your local machine:
  
   git clone https://github.com/bojanmilovanovicQA/etonDigitalZadatak.git

   
   cd etonDigitalZadatak

***Install the project dependencies:

npm install

***Install Cypress:

npm install cypress --save-dev

***Open Cypress by running:

npx cypress open


***How to Run Tests:

1.Open Project with terminal.

2.Run command: npx cypress open.

3.Choose "E2E Testing" option (should be configured)

4.Select Chroome and click on "Start E2E testing on Chrome"

5.Click "holycode.cy.js"

3.The tests will execute in the Cypress test runner, and you will be able to see the results in real-time.


***Test Cases :

1.Verify homepage title: Checks that the homepage title matches "Tech Solutions to scale".

2.Navigate to Careers and check QA team: Tests navigation to the Careers page and verifies the team for the position "Senior QA Developer/QA Team Lead".

3.Filters positions for Serbia and logs titles: Filters job positions for Serbia and logs the job titles to a text file.
