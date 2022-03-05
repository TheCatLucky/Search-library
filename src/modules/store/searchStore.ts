import { configure, makeAutoObservable } from 'mobx';

import { ExtendedTerm } from '../models/extendedTerm';
import ItemModel from '../models/ItemModel';

configure({
  enforceActions: 'always',
});

export class SearchStore {
  items: ItemModel[] = [];

  searchValue = '';

  extendedTerm = {};

  filteredData: ItemModel[] = [];

  constructor(items: ItemModel[] = []) {
    makeAutoObservable(this);
    if (items.length) {
      this.setItems(items);
    }
  }

  /* getAllData(): Data {
    return this.data;
  } */

  setItems = (data: ItemModel[]) => {
    this.items = data;
  };

  setFilteredDate = (data: ItemModel[]) => {
    this.filteredData = data;
  };

  setSearchValue(value: string): void {
    this.searchValue = value;
  }

  setExtendedTerm(value: ExtendedTerm): void {
    this.extendedTerm = value;
  }

  setFilter = (searchValue = '') => {
    this.searchValue = searchValue;
    if (searchValue.length > 1) {
      this.filteredData = this.items;
    } else {
      this.filteredData = this.items;
    }
  };
}

export default SearchStore;
