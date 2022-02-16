import React from 'react';

import AppRouter from '../AppRouter';
import styles from './App.module.scss';

const App: React.FC = () => (
  <main className={styles.component}>
    <section className={styles.content}>
      <AppRouter />
    </section>
  </main>
);

export default App;
