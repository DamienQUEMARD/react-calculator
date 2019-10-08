import './assets/App.styl'

import React, { Component } from 'react'

import CalculatorButton from './components/CalculatorButton'
import CalculatorDisplay from './components/CalculatorDisplay'
import { calculate } from './lib/helpers'
import { hot } from 'react-hot-loader/root'

class Calculator extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      expression: '0',
      result: null,
    }
  }

  clear = () => {
    this.setState({
      expression: '0',
      result: null,
    })
  }

  clearLastChar = async () => {
    const { expression } = this.state

    await this.setState({
      expression: expression.substring(0, expression.length - 1) || '0',
    })

    await this.processCalculate()
  }

  inputPercent = () => {
    const { expression } = this.state

    if (expression === 0) return
    /* eslint no-eval: 0 */
    const newValue = parseFloat(eval(expression)) / 100

    this.setState({
      expression: String(newValue),
    })
  }

  inputDot = () => {
    const { expression } = this.state

    if (!/\./.test(expression[expression.length - 1])) {
      this.setState({
        expression: expression + '.',
      })
    }
  }

  inputKey = async (key) => {
    const { expression } = this.state

    await this.setState({
      expression: expression === '0' ? String(key) : expression + String(key),
    })
    await this.processCalculate()
  }

  processCalculate = (showOnlyResult = false) => {
    const { expression } = this.state
    console.log(expression)

    try {
      this.setState({
        /* eslint no-eval: 0 */
        expression: showOnlyResult ? String(calculate(expression)) : expression,
        /* eslint no-eval: 0 */
        result: showOnlyResult ? '' : String(calculate(expression)),
      })
    } catch (e) {
      console.log('error calcul')
    }
  }

  handleKeyDown = (event) => {
    let { key } = event

    if (['=', 'Enter'].includes(key)) {
      event.preventDefault()
      this.processCalculate(true)
    } else if ([',', '.'].includes(key)) {
      event.preventDefault()
      this.inputDot()
    } else if (key === '%') {
      event.preventDefault()
      this.inputPercent()
    } else if (key === 'Backspace') {
      event.preventDefault()
      this.clearLastChar()
    } else if (key === 'Delete') {
      event.preventDefault()
      this.clear()
    } else if (/[0-9+\-*/]/.test(key)) {
      event.preventDefault()
      this.inputKey(key)
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    const { expression, result } = this.state

    const clearDisplay = expression !== '0'
    const clearText = clearDisplay ? 'C' : 'AC'

    return (
      <div className='calculator'>
        <CalculatorDisplay expression={expression} result={result} />
        <div className='calculator-keypad'>
          <div className='input-keys'>
            <div className='function-keys'>
              <CalculatorButton
                className='key-clear'
                onPress={() => this.clear()}
              >
                {clearText}
              </CalculatorButton>

              <CalculatorButton
                className='key-percent'
                onPress={() => this.inputPercent()}
              >
                %
              </CalculatorButton>
              <CalculatorButton
                className='key-backspace'
                onPress={() => this.clearLastChar()}
              >
                ←
              </CalculatorButton>
            </div>
            <div className='digit-keys'>
              <CalculatorButton
                className='key-0'
                onPress={() => this.inputKey(0)}
              >
                0
              </CalculatorButton>
              <CalculatorButton
                className='key-dot'
                onPress={() => this.inputDot()}
              >
                ●
              </CalculatorButton>
              <CalculatorButton
                className='key-1'
                onPress={() => this.inputKey(1)}
              >
                1
              </CalculatorButton>
              <CalculatorButton
                className='key-2'
                onPress={() => this.inputKey(2)}
              >
                2
              </CalculatorButton>
              <CalculatorButton
                className='key-3'
                onPress={() => this.inputKey(3)}
              >
                3
              </CalculatorButton>
              <CalculatorButton
                className='key-4'
                onPress={() => this.inputKey(4)}
              >
                4
              </CalculatorButton>
              <CalculatorButton
                className='key-5'
                onPress={() => this.inputKey(5)}
              >
                5
              </CalculatorButton>
              <CalculatorButton
                className='key-6'
                onPress={() => this.inputKey(6)}
              >
                6
              </CalculatorButton>
              <CalculatorButton
                className='key-7'
                onPress={() => this.inputKey(7)}
              >
                7
              </CalculatorButton>
              <CalculatorButton
                className='key-8'
                onPress={() => this.inputKey(8)}
              >
                8
              </CalculatorButton>
              <CalculatorButton
                className='key-9'
                onPress={() => this.inputKey(9)}
              >
                9
              </CalculatorButton>
            </div>
          </div>
          <div className='operator-keys'>
            <CalculatorButton
              className='key-divide'
              onPress={() => this.inputKey('/')}
            >
              ÷
            </CalculatorButton>
            <CalculatorButton
              className='key-multiply'
              onPress={() => this.inputKey('*')}
            >
              ×
            </CalculatorButton>
            <CalculatorButton
              className='key-subtract'
              onPress={() => this.inputKey('-')}
            >
              −
            </CalculatorButton>
            <CalculatorButton
              className='key-add'
              onPress={() => this.inputKey('+')}
            >
              +
            </CalculatorButton>
            <CalculatorButton
              className='key-equals'
              onPress={() => this.processCalculate(true)}
            >
              =
            </CalculatorButton>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(Calculator)
