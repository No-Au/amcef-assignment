// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('setCookies', () => {
    cy.setCookie('viewed_cookie_policy', 'yes')

    // this could by done by getting cookies, too
    const cookies = ['performance', 'others', 'necessary', 'functional', 'analytics', 'advertisement']

    cookies.forEach((cookies) => {
        cy.setCookie(`cookielawinfo-checkbox-${cookies}`, 'yes')
    })

})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

