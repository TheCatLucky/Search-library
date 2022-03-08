import {
  action, configure, makeObservable, observable,
} from 'mobx';

import DataModel from '../models/DataModel';
import { ExtendedTerm } from '../models/extendedTerm';

configure({
  enforceActions: 'always',
});

export class SearchStore {
  items: DataModel[] = [];

  searchValue = '';

  limit = 0;

  extendedTerm = {};

  filteredData: DataModel[] = [];

  constructor(items: DataModel[] = []) {
    makeObservable(this, {
      setItems: action.bound,
      setLimit: action.bound,
      setFilteredDate: action.bound,
      setSearchValue: action.bound,
      setExtendedTerm: action.bound,
      filteredData: observable,
      extendedTerm: observable,
      searchValue: observable,
      items: observable,
    });
    if (items.length) {
      this.setItems(items);
    }
  }

  setItems = (data: DataModel[]): void => {
    this.items = data;
  };

  setLimit = (limit: number): void => {
    this.limit = limit;
  };

  setFilteredDate = (data: DataModel[]): void => {
    this.filteredData = data;
  };

  setSearchValue(value: string): void {
    this.searchValue = value;
  }

  setExtendedTerm(value: ExtendedTerm): void {
    this.extendedTerm = value;
  }
}

export default SearchStore;
