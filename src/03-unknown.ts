let myAny: any;
myAny = 'string';
myAny = true;
myAny = 12;

myAny.doSomething();

let myUnknown: unknown;
myUnknown = 'string';
myUnknown = true;
myUnknown = 12;

// myUnknown.doSomething(); // ❌ No se puede usar sin hacer una validación de tipo primero

if (typeof myUnknown === 'string') {
  // ✔ Validación de tipo
  myUnknown = myUnknown.toUpperCase();
}
