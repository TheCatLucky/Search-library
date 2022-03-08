import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React from 'react';

import SearchStore from '../../../store';
import SearchCategory from './SearchCategory';
import classes from './SearchDropdown.module.scss';

type Props = {
  store: SearchStore;
};

const SearchDropdown: React.FC<Props> = (props) => {
  const { store } = props;
  const isFilteredEmpty = store.filteredData.reduce(
    (acc, i) => i.items.length === 0 && acc,
    true,
  );
  if (isFilteredEmpty) {
    return (
      <div className={classes.component}>
        <p>По вашему запросу ничего не найдено</p>
      </div>
    );
  }

  return (
    <div className={classes.component}>
      <div className={classes.scroll}>
        <SearchCategory store={store.filteredData} limit={store.limit} />
      </div>
      <div className={classes.showAll}>
        <Button type="primary">Показать все результаты</Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
