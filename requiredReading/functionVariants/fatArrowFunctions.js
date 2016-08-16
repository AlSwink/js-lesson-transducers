'use strict'

const noArgs =
  () => {
    console.log('no args')
  }

const oneArgWithParens =
  (x) => {
    console.log(`x: ${x}`)
  }

const oneArgNoParens =
  x => {
    console.log(`x: ${x}`)
  }

const oneArgWithDefault =
  (x = 'default') => {
    console.log(`x: ${x}`)
  }

const twoArgs =
  (x, y) => {
    console.log(`x: ${x}, y: ${y}`)
  }

const twoArgsWithDefault =
  (x, y = 'default') => {
    console.log(`x: ${x}, y: ${y}`)
  }

const restParams =
  (...args) => {
    console.log(args)
  }

const oneArgWithRestParams =
  (x, ...rest) => {
    console.log(`x: ${x}`)
    console.log(rest)
  }

noArgs()
oneArgWithParens(10)
oneArgNoParens(10)
oneArgWithDefault()
twoArgs(10, 20)
twoArgsWithDefault(10)
restParams(1, 2, 3, 4)
oneArgWithRestParams(10)

const singleLineValueReturn =
  () =>
    'returned' + ' ' + 'value'

const multiLineValueReturn =
  () => {
    console.log('multi line value return')
    return 'returned' + ' ' + 'value'
  }

let x = 10
const singleLineNoReturn =
  () => {
    x += 10
  }

const multiLineNoReturn =
  () => {
    console.log(`x: ${x}`)
    x += 10
  }

console.log(singleLineValueReturn())
console.log(multiLineValueReturn())
console.log(singleLineNoReturn())
console.log(multiLineNoReturn())
