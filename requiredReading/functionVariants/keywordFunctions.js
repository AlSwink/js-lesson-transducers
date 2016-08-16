'use strict'

function noArgs () {
  console.log('no args')
}

function oneArg (x) {
  console.log(`x: ${x}`)
}

function oneArgWithDefault (x = 'default') {
  console.log(`x: ${x}`)
}

function twoArgs (x, y) {
  console.log(`x: ${x}, y: ${y}`)
}

function twoArgsWithDefault (x, y = 'default') {
  console.log(`x: ${x}, y: ${y}`)
}

function restParams (...args) {
  console.log(args)
}

function oneArgWithRestParams (x, ...rest) {
  console.log(`x: ${x}`)
  console.log(rest)
}

noArgs()
oneArg(10)
oneArgWithDefault()
twoArgs(10, 20)
twoArgsWithDefault(10)
restParams(1, 2, 3, 4)
oneArgWithRestParams(10)

function singleLineValueReturn () {
  return 'returned' + ' ' + 'value'
}

function multiLineValueReturn () {
  console.log('multi line value return')
  return 'returned' + ' ' + 'value'
}

let x = 10
function singleLineNoReturn () {
  x += 10
}

function multiLineNoReturn () {
  console.log(`x: ${x}`)
  x += 10
}

console.log(singleLineValueReturn())
console.log(multiLineValueReturn())
console.log(singleLineNoReturn())
console.log(multiLineNoReturn())
