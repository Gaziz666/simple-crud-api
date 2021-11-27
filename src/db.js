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

  update = (id, opt) => {
    const index = this.person.findIndex((item) => item.id === id);
    if (index < 0) {
      return 0;
    }
    if (opt.name) {
      this.person[index].name = opt.name;
    }
    if (opt.age) {
      this.person[index].age = opt.age;
    }
    if (opt.hobbies) {
      this.person[index].hobbies = opt.hobbies;
    }
    return this.person[index];
  };

  delete = (id) => {
    const filtered = this.person.filter((item) => item.id !== id);
    const diff = this.person.length - filtered.length;
    if (diff) {
      this.person = filtered;
    }
    return diff;
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
      Array.isArray(opt.hobbies)
    ) {
      if (
        opt.hobbies.length === 0 ||
        opt.hobbies.every((item) => typeof item === 'string')
      ) {
        return true;
      }
    }
    return;
  };
}
const person = new Person();

export { person };
