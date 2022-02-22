import React from 'react';

import AppRouter from '../AppRouter';
import classes from './App.module.scss';

const App: React.FC = () => (
  <main className={classes.component}>
    <section className={classes.content}>
      <AppRouter />
    </section>
  </main>
);

export default App;
