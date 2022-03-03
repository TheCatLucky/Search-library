import { configure, makeAutoObservable } from 'mobx';

import { Data } from '../models/data';
import { ExtendedTerm } from '../models/extendedTerm';

configure({
  enforceActions: 'always',
});

class SearchStore {
  data: Data | null = null;

  term = '';

  extendedTerm = {};

  filteredData: Data | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  /* getAllData(): Data {
    return this.data;
  } */

  setData = (data: Data) => {
    this.data = data;
  };

  setTerm(payload: string): void {
    this.term = payload;
  }

  setExtendedTerm(payload: ExtendedTerm): void {
    this.extendedTerm = payload;
  }

  setFilter = (term = '') => {
    this.term = term;
    if (term.length > 1) {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data;
    }
  };
}

export default new SearchStore();
