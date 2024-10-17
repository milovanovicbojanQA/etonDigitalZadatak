# Holycode Website Tests

This project contains automated tests for the Holycode website using Cypress. The tests cover key functionalities, including navigation, job filtering, and verifying page titles.

## Table of Contents

- [Installation](#installation)
- [Setup Instructions](#setup-instructions)
- [How to Run Tests](#how-to-run-tests)
- [Test Cases](#test-cases)

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone the repository to your local machine:
  
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

***Install the project dependencies:

npm install

***Install Cypress:

npm install cypress --save-dev

***Open Cypress by running:

npx cypress open


***How to Run Tests:

1.Open Cypress, and you will see the test files listed in the Cypress Test Runner.
2.Click on the test file you want to run (e.g., Tests.js).
3.The tests will execute in the Cypress test runner, and you will be able to see the results in real-time.


***Test Cases:

1.Verify homepage title: Checks that the homepage title matches "Tech Solutions to scale".
2.Navigate to Careers and check QA team: Tests navigation to the Careers page and verifies the team for the position "Senior QA Developer/QA Team Lead".
3.Filters positions for Serbia and logs titles: Filters job positions for Serbia and logs the job titles to a text file.