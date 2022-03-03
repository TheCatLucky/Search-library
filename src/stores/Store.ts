import { configure, makeAutoObservable } from 'mobx';

import data from '../data';
import { Data } from '../models/data';
import { ExtendedTerm } from '../models/extendedTerm';

configure({
  enforceActions: 'always',
});

class SearchStore {
  data = data;

  term = '';

  extendedTerm = {};

  getAllData(): Data {
    return this.data;
  }

  getTerm(): string {
    return this.term;
  }

  setTerm(payload: string): void {
    this.term = payload;
  }

  getExtendedTerm(): ExtendedTerm {
    return this.extendedTerm;
  }

  setExtendedTerm(payload: ExtendedTerm): void {
    this.extendedTerm = payload;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default SearchStore;
