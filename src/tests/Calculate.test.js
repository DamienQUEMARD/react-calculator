// import React from 'react'
import { calculate } from '../lib/helpers'
import { expect } from 'chai'
// import { shallow } from 'enzyme'
// import sinon from 'sinon'

describe('Calculate', () => {
  let expression
  it('evaluates the expression correctly', () => {
    expression = '2+3*6+2*4'
    expect(calculate(expression)).to.equal(28)

    expression = '2-8*9+7'
    expect(calculate(expression)).to.equal(-63)

    expression = '0+2+3'
    expect(calculate(expression)).to.equal(5)

    expression = '2.5+6.3'
    expect(calculate(expression)).to.equal(8.8)
  })

  it('evaluates expressions starting with a - operator', () => {
    expression = '-30'
    expect(calculate(expression)).to.equal(-30)

    expression = '-30-10'
    expect(calculate(expression)).to.equal(-40)

    expression = '-1.5-2.5'
    expect(calculate(expression)).to.equal(-4)
  })

  it('should throw an error for expressions starting with any other operator apart from "-" ', () => {
    expression = '*30-6'
    expect(calculate(expression)).to.throw()

    expression = '*3'
    expect(calculate(expression)).to.throw()

    expression = '+4-6'
    expect(calculate(expression)).to.throw()

    expression = '/4-6'
    expect(calculate(expression)).to.throw()
  })
})
