import { toJS } from 'mobx';
import React from 'react';

import data from '../../data';
import { Search, SearchStore } from '../../modules/Search';
import classes from './App.module.scss';
import ItemModel from '../../modules/Search/models/ItemModel';

const store = new SearchStore(data);
let arr = {};
const handleClick = (item: ItemModel) => {
  arr = item;
  console.log(toJS(arr));
  return arr;
};
const App: React.FC = () => (
  <main className={classes.component}>
    <section className={classes.content}>
      <Search store={store} onItemClick={handleClick} />
    </section>
  </main>
);

export default App;
