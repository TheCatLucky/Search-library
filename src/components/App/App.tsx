import React from 'react';

import data from '../../data';
import { Search, SearchStore } from '../../modules';
import { ItemModel } from '../../modules/models';
import classes from './App.module.scss';

const App: React.FC = () => {
  const store = new SearchStore(data);

  return (
    <main className={classes.component}>
      <section className={classes.content}>
        <Search store={store} limit={10} />
      </section>
    </main>
  );
};

export default App;
