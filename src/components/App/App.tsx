import React from 'react';

import data from '../../data';
import { Search, SearchStore } from '../../modules';
import { ItemModel } from '../../modules/models';
import classes from './App.module.scss';

const App: React.FC = () => {
  const store = new SearchStore(data);

  const handleSearch = () => {
    const filteredItems = data.map((category) => ({
      ...category,
      items: category.items.filter((item: ItemModel) =>
        item.name.toLowerCase().includes(store.searchValue.toLowerCase())
      ),
    }));
    store.setFilteredDate(filteredItems);
  };
  return (
    <main className={classes.component}>
      <section className={classes.content}>
        <Search store={store} onSearch={handleSearch} />
      </section>
    </main>
  );
};

export default App;
