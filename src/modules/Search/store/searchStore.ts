import { action, computed, configure, makeObservable, observable } from 'mobx';
import { ItemModel } from '../models';

import CategoryModel from '../models/CategoryModel';

configure({
  enforceActions: 'always',
});

class SearchStore {
  items: CategoryModel[] = [];

  searchValue = '';

  limit = 10;

  filteredData: CategoryModel[] = [];

  dropdownData: CategoryModel[] = [];

  showDropdown = false;

  showResultPage = false;

  constructor(items: CategoryModel[] = []) {
    makeObservable(this, {
      setItems: action.bound,
      setLimit: action.bound,
      setFilteredDate: action.bound,
      setSearchValue: action.bound,
      setShowDropdown: action.bound,
      setShowResultPage: action.bound,
      filteredItems: computed,
      filteredData: observable,
      showDropdown: observable,
      showResultPage: observable,
      searchValue: observable,
      items: observable,
    });
    if (items.length) {
      this.setItems(items);
    }
  }

  setItems(data: CategoryModel[]): void {
    this.items = data;
  }

  setLimit(limit: number): void {
    this.limit = limit;
  }

  setFilteredDate(data: CategoryModel[]): void {
    this.filteredData = data;
  }

  setShowDropdown(flag: boolean): void {
    this.showDropdown = flag;
  }

  setShowResultPage(flag: boolean): void {
    this.showResultPage = flag;
  }

  setSearchValue(value: string): void {
    this.searchValue = value.trim();
  }

  get filteredItems(): CategoryModel[] {
    return this.items.map((category) => ({
      ...category,
      items: category.items.filter((item: ItemModel) =>
        item.name.toLowerCase().includes(this.searchValue.toLowerCase())
      ),
    }));
  }
  get dropdown(): CategoryModel[] {
    let itemsLength = 0;
    this.dropdownData = [];
    for (let i = 0; i < this.filteredData.length; i += 1) {
      this.dropdownData.push({
        id: this.filteredData[i].id,
        title: this.filteredData[i].title,
        logo: this.filteredData[i].logo,
        items: [],
      });
      for (let j = 0; j < this.filteredData[i].items.length; j += 1) {
        this.dropdownData[i].items.push(this.filteredData[i].items[j]);
        itemsLength += 1;
        if (itemsLength >= this.limit) {
          j = this.filteredData[i].items.length;
          i = this.filteredData.length - 1;
        }
      }
    }
    return this.dropdownData;
  }
}

export default SearchStore;
