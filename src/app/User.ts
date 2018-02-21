export class User {
  id: string = "";
  email: string = "";
  //Both the passwords are in a single object
  password: {
    pwd: string;
    confirm: string;
  };
  gender: string;
  terms: boolean;

  // constructor(values: Object = {}) {
  //   //Constructor initialization
  //   Object.assign(this, values);
  // }
  

  constructor() {
    //Constructor initialization
    // Object.assign(this, values);
    this.password = { pwd: '', confirm: '' };
  }
}