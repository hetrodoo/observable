[![Observable Logo](https://storage.googleapis.com/hetrodo-public/Observable.png)](https://www.npmjs.com/package/@hetrodo/observable)

[![Downloads](https://img.shields.io/npm/dm/@hetrodo/observable?label=Downloads)](https://www.npmjs.com/package/@hetrodo/observable)

Observable is a simple and lightweight implementation of the observable pattern in nodejs, it fires events when
properties are changed.

But note that only the root properties of objects are observed.

## Supported types

* `Object`
* `Array`
* `Primitives` (string, number, boolean, null, undefined)

## Installation

```bash
npm install @hetrodo/observable
```

## Usage

```js
const Observable = require("@hetrodo/observable");

const counter = new Observable(0); //Create a new observable with the initial value of 0

counter.subscribe((value) => {
    console.log(value); //Subscribe to the observable, this will print the value of the observable every time it changes
});

setInterval(() => {
    counter.value++; //Increment the value of the observable every second
}, 1000);
```
