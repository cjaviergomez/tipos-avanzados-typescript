// El overload de funciones sólo aplica para funciones de tipo declaración de función
function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const returnString = parseString(['C', 'A', 'R', 'L', 'O', 'S']);
console.log({ returnString });

const returnArray = parseString('CARLOS');
console.log({ returnArray });

// PROBLEM: ❌ We don't know what is exactly the type of function return
// returnString.toUpperCase(); // We can NOT do this without a type validation

if (typeof returnString === 'string') {
  returnString.toUpperCase();
}
