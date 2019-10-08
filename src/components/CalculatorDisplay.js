import '../assets/App.styl'

import React, { Component } from 'react'

import AutoScalingText from './AutoScalingText'
import { hot } from 'react-hot-loader/root'
import { string } from '../shared/prop-types'

class CalculatorDisplay extends Component {
  static propTypes = {
    expression: string.isRequired,
    result: string,
  }

  render() {
    const { expression, result, ...props } = this.props

    return (
      <div {...props} className='calculator-display'>
        <div className='calculator-display-value'>
          <AutoScalingText>{expression}</AutoScalingText>
        </div>
        <div className='calculator-display-result'>
          <AutoScalingText>{result}</AutoScalingText>
        </div>
      </div>
    )
  }
}

export default hot(CalculatorDisplay)
