import { configure, makeAutoObservable } from 'mobx';

import DataModel from '../models/DataModel';
import { ExtendedTerm } from '../models/extendedTerm';

configure({
  enforceActions: 'always',
});

export class SearchStore {
  items: DataModel[] = [];

  searchValue = '';

  extendedTerm = {};

  filteredData: DataModel[] = [];

  constructor(items: DataModel[] = []) {
    makeAutoObservable(this);
    if (items.length) {
      this.setItems(items);
    }
  }

  setItems = (data: DataModel[]): void => {
    this.items = data;
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
