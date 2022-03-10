import React from 'react';

import data from '../../data';
import { Search, SearchStore } from '../../modules/Search';
import classes from './App.module.scss';

const store = new SearchStore(data);

const App: React.FC = () => {
  return (
    <main className={classes.component}>
      <section className={classes.content}>
        <Search store={store} />
      </section>
    </main>
  );
};

export default App;
