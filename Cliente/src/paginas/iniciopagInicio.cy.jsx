import React from 'react'
import pagInicio from './inicio'

describe('<pagInicio />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<pagInicio />)
  })
})