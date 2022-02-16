import React from 'react';

import styles from './Search.module.scss';

type SearchProps = {};

const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className={styles.component}>
      Search
    </div>
  );
};

export default Search;
