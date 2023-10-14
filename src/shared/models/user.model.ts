export interface IUser {
  name?: string,
  email?: string;
  password?: string;
  age?: string,
}

export class User implements IUser {
  name?: string;
  email?: string;
  password?: string;
  age?: string;

  constructor(name = '' , email = '', password = '',age = '') {
    this.email = email;
    this.password = password;
    this.name= name;
    this.age = age;
  }
}
