Observable is an observable pattern implementation in nodejs

```js
const Observable = require("Observable");

const primitives = new Observable(0);
primitives.subscribe(console.log);

const objects = new Observable({ count: 0 });
objects.subscribe(console.log);

const lists = new Observable([]);
lists.subscribe(console.log);

let i = 0;

setInterval(() => {
    primitives.value++;
    objects.value.count++;
    lists.value.push(i);

    i++;
}, 250);
```
