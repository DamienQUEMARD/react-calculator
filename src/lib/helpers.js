export function calculate(expression) {
  if (/^[*+/]/.test(expression)) {
    return () => {
      throw new Error('Cannot start the expression with invalid operators')
    }
  }

  /* eslint no-eval: 0 */
  return eval(expression)
}
