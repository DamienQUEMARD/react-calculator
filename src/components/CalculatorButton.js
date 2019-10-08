import '../assets/App.styl'

import React, { Component } from 'react'
import { func, string } from '../shared/prop-types'

import PointTarget from 'react-point'
import { hot } from 'react-hot-loader/root'

class CalculatorButton extends Component {
  static propTypes = {
    onPress: func.isRequired,
    className: string.isRequired,
  }

  render() {
    const { onPress, className, ...props } = this.props

    return (
      <PointTarget onPoint={onPress}>
        <button className={`calculator-key ${className}`} {...props} />
      </PointTarget>
    )
  }
}

export default hot(CalculatorButton)
