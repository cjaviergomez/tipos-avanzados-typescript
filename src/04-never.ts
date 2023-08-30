const withOutEnd = () => {
  while (true) {
    console.log('Not end');
  }
};

const failMessage = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Its a string';
  } else if (Array.isArray(input)) {
    return 'Its a array';
  }
  return failMessage('Not match');
};

console.log(example('Hi'));
console.log(example([1, 2, 3]));
console.log(example(12345)); // error: Uncaught Error: Not Match
console.log(example('After error')); // NUNCA SE EJECUTA, porque se lanzó un error previamente
