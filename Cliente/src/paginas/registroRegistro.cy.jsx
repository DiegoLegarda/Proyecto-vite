import React from 'react'
import Registro from './registro'

describe('<Registro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Registro />)
    cy.intercept('POST', 'http://localhost:3000/api/Username/registro', {
      statusCode: 200,
      body: { data:"usuario registrado" },
    }).as('registro');

    cy.get('[name="nombre"]').type('Juanito')
    cy.get('[name="username"]').type('usuario');
    cy.get('[name="correo"]').type('juanito@mail.com');
    cy.get('[name="password"]').type('1234');
    cy.get('select').select("Administrador");
    cy.get('button').click();

    cy.wait('@registro').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.contains("Usuario registrado exitosamente:").should('be.visible');
  })
})