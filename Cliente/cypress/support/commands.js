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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('login', () => {
    cy.intercept('POST', 'http://localhost:3000/api/login/token', {
        statusCode: 200,
        body: { token: 'test-token', rol: 'admin' },
    }).as('loginRequest');

    cy.visit('http://localhost:5173/Ingreso');
    cy.get('input[placeholder="Nombre de usuario"]').type('Bbanano');
    cy.get('input[placeholder="Contraseña"]').type('123456789');
    cy.get('button').contains('Iniciar sesión').click();

    //cy.wait('@loginRequest');
});
