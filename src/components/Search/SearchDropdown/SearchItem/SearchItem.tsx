import React from 'react';

import styles from './SearchItem.module.scss';

type SearchItemProps = {};

const SearchItem: React.FC<SearchItemProps> = (props) => {
  return (
    <div className={styles.component}>
      SearchItem
    </div>
  );
};

export default SearchItem;
