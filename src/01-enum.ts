export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  name: string;
  role: ROLES;
};

const myUser: User = {
  name: 'Carlos',
  role: ROLES.ADMIN,
};
