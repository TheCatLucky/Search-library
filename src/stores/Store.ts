import {
  configure,
  action,
  makeObservable,
  observable,
} from 'mobx';

configure({
  enforceActions: 'always',
});

class Store {
  constructor() {
    makeObservable(this, {});
  }
}

export default Store;
