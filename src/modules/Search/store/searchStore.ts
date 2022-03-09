import { action, computed, configure, makeObservable, observable } from 'mobx';
import { ItemModel } from '../models';

import DataModel from '../models/DataModel';

configure({
  enforceActions: 'always',
});

export class SearchStore {
  items: DataModel[] = [];

  searchValue = '';

  limit = 10;

  filteredData: DataModel[] = [];

  constructor(items: DataModel[] = []) {
    makeObservable(this, {
      setItems: action.bound,
      setLimit: action.bound,
      setFilteredDate: action.bound,
      setSearchValue: action.bound,
      filteredItems: computed,
      filteredData: observable,
      searchValue: observable,
      items: observable,
    });
    if (items.length) {
      this.setItems(items);
    }
  }

  setItems(data: DataModel[]): void {
    this.items = data;
  }

  setLimit(limit: number): void {
    this.limit = limit;
  }

  setFilteredDate(data: DataModel[]): void {
    this.filteredData = data;
  }

  setSearchValue(value: string): void {
    this.searchValue = value;
  }

  get filteredItems():DataModel[] {
    return this.items.map((category) => ({
      ...category,
      items: category.items.filter((item: ItemModel) =>
        item.name.toLowerCase().includes(this.searchValue.toLowerCase())
      ),
    }));
  }
}

export default SearchStore;
