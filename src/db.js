import { v4 as uuid } from 'uuid';

class Person {
  constructor() {
    this.person = [];
  }

  create = (opt) => {
    if (!this.validate(opt)) {
      return;
    }
    const id = uuid();
    opt.id = id;
    const newLength = this.person.push(opt);
    return this.person[newLength - 1];
  };

  getAll = () => {
    return this.person;
  };

  getById = (id) => {
    const result = this.person.filter((item) => item.id === id);
    if (result.length) {
      return result[0];
    }
    return result.length;
  };

  validate = (opt) => {
    if (
      typeof opt.name === 'string' &&
      typeof opt.age === 'number' &&
      typeof opt.hobbies === 'string'
    ) {
      return true;
    }
    return;
  };
}
const person = new Person();

export { person };
