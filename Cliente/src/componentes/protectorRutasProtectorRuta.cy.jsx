import React from 'react'
import ProtectorRuta from './protectorRutas'

describe('<ProtectorRuta />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProtectorRuta />)
  })
})