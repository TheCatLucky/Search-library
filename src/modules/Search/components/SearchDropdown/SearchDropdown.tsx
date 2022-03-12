import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React from 'react';

import SearchStore from '../../store';
import SearchResult from './SearchResult';
import classes from './SearchDropdown.module.scss';

type Props = {
  store: SearchStore;
};

const SearchDropdown: React.FC<Props> = (props) => {
  const { store } = props;
  const isFilteredEmpty = store.filteredData.reduce(
    (isEmpty, category) => category.items.length === 0 && isEmpty,
    true
  );
  const handleResultPage = () => {
    store.setResultPageDate(store.filteredData);
    store.setResultSearchValue();
    store.setShowResultPage(true);
    store.setShowDropdown(false);
  };
  if (isFilteredEmpty) {
    return (
      <div className={classes.component}>
        <p className={classes.noResult}>По вашему запросу ничего не найдено</p>
      </div>
    );
  }
  return (
    <div className={classes.component}>
      <div className={classes.scroll}>
        <SearchResult categories={store.dropdown} />
      </div>
      <div className={classes.showAll}>
        <Button type="primary" onClick={handleResultPage}>
          Показать все результаты
        </Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
