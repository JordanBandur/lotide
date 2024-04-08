# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jordanbandur/lotide`

**Require it:**

`const _ = require('@jordanbandur/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- head: Returns the first element of a string
- tail: Returns an array with it's first element removed
- middle: Returns the middle value of an array
- assertArraysEqual: Compares 2 arrays
- assertEqual: Checks if an input produces the expected result
- assertObjectsEqual: Compares 2 objects
- countLetters: Returns a count of how many times a character apears in a senetence
- countOnly: Returns a count of a specified value
- eqArrays: Check if 2 arrays match
- eqObjects: check if 2 objects match
- findKey: Returns a key based off of search criteria
- findKeyByValue: Returns a key given a value
- flatten: Returns a multi-dimentional array as a single dimention array
- letterPositions: Returns the positions of letters in a sentence
- takeUntil: Returns an array of elements taken from the input array until a certain condition is met
- without: filters out elements of an array based off elements from a second array