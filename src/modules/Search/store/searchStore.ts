import {
  action, computed, configure, makeObservable, observable,
} from 'mobx';

import { ItemModel } from '../models';
import CategoryModel from '../models/CategoryModel';

configure({
  enforceActions: 'always',
});

class SearchStore {
  /**
   * Входные данные.
   */
  items: CategoryModel[] = [];

  /**
   * Текущий поисковый запрос.
   */
  searchValue = '';

  /**
   * Сохраненный поисковый запрос для оторабжения на странице результатов.
   */
  resultSearchValue = '';

  /**
   * Лимит вывода по умолчанию.
   */
  limit = 10;

  /**
   * Отфильтрованные данные.
   */
  filteredData: CategoryModel[] = [];

  /**
   * Cохранённые данные для страницы результатов.
   */
  resultPageData: CategoryModel[] = [];

  /**
   * Все элементы категорий.
   */
  resultPageAllItems: ItemModel[] = [];

  constructor(items: CategoryModel[] = []) {
    makeObservable(this, {
      setItems: action.bound,
      setLimit: action.bound,
      setFilteredDate: action.bound,
      setResultSearchValue: action.bound,
      setResultPageAllItems: action.bound,
      setResultPageData: action.bound,
      setSearchValue: action.bound,
      filteredItems: computed,
      filteredData: observable,
      items: observable,
      resultPageAllItems: observable,
      resultPageData: observable,
      resultSearchValue: observable,
      searchValue: observable,
    });
    if (items.length) {
      this.setItems(items);
    }
  }

  setItems(data: CategoryModel[]): void {
    this.items = data.map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        logo: item.logo || category.logo,
      })),
    }));
  }

  setLimit(limit: number): void {
    this.limit = limit;
  }

  setFilteredDate(data: CategoryModel[]): void {
    data.forEach((category) => category.items.sort((a, b) => b.frequency - a.frequency));
    this.filteredData = data;
  }

  setResultPageAllItems(): void {
    this.resultPageAllItems = this.filteredData.flatMap((category) => category.items.map((item) => item));
  }

  setSearchValue(value: string): void {
    this.searchValue = value.trim();
  }

  setResultPageData(): void {
    this.resultPageData = this.filteredData;
  }

  setResultSearchValue(): void {
    this.resultSearchValue = this.searchValue.trim();
  }

  /**
   * Функция фильтрации входных данных по именам.
   */
  get filteredItems(): CategoryModel[] {
    return this.items.map((category) => ({
      ...category,
      items: category.items.filter((item: ItemModel) => item.name.toLowerCase().includes(this.searchValue.toLowerCase())),
    }));
  }

  /**
   * Функция создания данных для выпадающего списка в соответствии с заданным лимитом и частотой обращений.
   */
  get limitedCategories(): CategoryModel[] {
    let itemsLength = 0;
    const limitedCategories: CategoryModel[] = [];
    for (let i = 0; i < this.filteredData.length; i += 1) {
      limitedCategories.push({
        id: this.filteredData[i].id,
        title: this.filteredData[i].title,
        logo: this.filteredData[i].logo,
        items: [],
      });
      for (let j = 0; j < this.filteredData[i].items.length; j += 1) {
        limitedCategories[i].items.push(this.filteredData[i].items[j]);
        itemsLength += 1;
        if (itemsLength >= this.limit) {
          j = this.filteredData[i].items.length;
          i = this.filteredData.length - 1;
        }
      }
    }
    limitedCategories.forEach((category) => category.items.sort((a, b) => b.frequency - a.frequency));
    return limitedCategories;
  }
}

export default SearchStore;
