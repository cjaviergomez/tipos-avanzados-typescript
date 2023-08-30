import { ROLES, User } from './01-enum';

const currentUser: User = {
  name: 'Carlos',
  role: ROLES.ADMIN,
};

const checkRoles = (role1: string, role2: string) => {
  // Esta forma obliga a validar uno por uno los parámetros
  if (currentUser.role === role1) return true;
  if (currentUser.role === role2) return true;
  return false;
};

console.log('checkRoles', checkRoles(ROLES.CUSTOMER, ROLES.SELLER));

const checkRolesV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) return true;
  return false;
};

// En esta versión nos obliga a tener que pasarle un arreglo
console.log('checkRolesV2', checkRolesV2([ROLES.CUSTOMER, ROLES.SELLER]));

const checkRolesV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) return true;
  return false;
};

// Con esta forma no importa la cantidad de parametros que enviemos, el parámetro rest los captura todos
// dentro de un arreglo
console.log(
  'checkRolesV3',
  checkRolesV3(ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN)
);
