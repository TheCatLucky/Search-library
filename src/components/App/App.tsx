import React from 'react';

import { Search } from '../../modules/index';
import classes from './App.module.scss';
import data from '../../data';
import SearchStore from '../../modules/store';

const App: React.FC = () => {
  const store = new SearchStore(data);
  const handleSearch = () => {
    const filteredItems = data.filter((item) => item.name.toLowerCase().includes(store.searchValue.toLowerCase()));
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
