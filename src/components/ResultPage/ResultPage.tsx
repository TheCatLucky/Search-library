import React from 'react';
import { CategoryModel } from '../../modules/Search/models';

import styles from './ResultPage.module.scss';
import SearchItem from './../../modules/Search/components/SearchDropdown/SearchItem/SearchItem';

type Props = {
  categories: CategoryModel[];
};

const ResultPage: React.FC<Props> = (props) => {
  const { categories } = props;
  return (
    <div className={styles.component}>
      {categories.map((category) =>
        category.items.map((item) => (
          <SearchItem itemStore={item} logo={category.logo} key={item.id} />
        ))
      )}
    </div>
  );
};

export default ResultPage;
