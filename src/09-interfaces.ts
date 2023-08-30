type Size = 'S' | 'M' | 'L' | 'XL'; // We can not do this with Interfaces
// type User = {
//   id: string;
//   name: string;
//   age: number;
// };

// This is same to use type but the difference is that Interfaces can use inheritance (extends)
interface User {
  id: string;
  name: string;
  age: number;
}

let users: User[] = [];

const addUser = (user: User) => {
  users.push(user);
};

addUser({
  id: '2ADW-8AJX-0SDX8',
  name: 'Carlos',
  age: 27,
});

console.log({ users });
