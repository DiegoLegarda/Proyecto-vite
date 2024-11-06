import React from 'react'
import SeleccionFormulario from './seleccionFormulario'

describe('<SeleccionFormulario />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SeleccionFormulario />)
  })
})