import React from 'react';

import AppRouter from '../AppRouter';
import Search from '../Search';
import classes from './App.module.scss';
import data from '../../data';

const App: React.FC = () => {
  const searchData = data;
  return (
    <main className={classes.component}>
      <section className={classes.content}>
        <AppRouter />
        <Search data={searchData} />
      </section>
    </main>
  );
};

export default App;
