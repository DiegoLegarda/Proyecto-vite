import React from 'react'
import acercaDe from './acercaDe'

describe('<acercaDe />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<acercaDe />)
  })
})