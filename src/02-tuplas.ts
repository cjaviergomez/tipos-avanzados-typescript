let data: (string | number)[] = ['string', 1, 'test'];
data.push('Another test');
data.push(12);
console.log({ data });

// Tuplas
let user: [string, number];
user = ['cjaviergomez', 20];
// user = [12, 'string']; ❌ No se puede
// user = ['carlos', 32, true] ❌ No se puede

user.push('carlos12');
user.push(2);

const [userName, age] = user; // Destructuración de una arreglo/tupla

console.log({ user, userName, age });
