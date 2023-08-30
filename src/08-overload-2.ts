// El overload de funciones sólo aplica para funciones de tipo declaración de función
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const returnString = parseString(['C', 'A', 'R', 'L', 'O', 'S']);
console.log({ returnString });

returnString.toUpperCase();

const returnArray = parseString('CARLOS');
console.log({ returnArray });

returnArray.reverse();
