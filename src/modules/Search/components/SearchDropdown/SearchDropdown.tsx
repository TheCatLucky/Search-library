import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import SearchStore from '../../store';
import SearchResult from './SearchResult';
import classes from './SearchDropdown.module.scss';

type Props = {
  store: SearchStore;
};

const SearchDropdown: React.FC<Props> = (props) => {
  const { store } = props;
  const dropdownRef = useRef<any>(null);
  const handleClick = (event: MouseEvent) => {
    if (!dropdownRef.current.contains(event.target)) {
      store.setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const isFilteredEmpty = store.filteredData.reduce(
    (isEmpty, category) => category.items.length === 0 && isEmpty,
    true
  );
  const handleResultPage = () => {
    store.setResultPageData();
    store.setResultPageAllItems();
    store.setResultSearchValue();
    store.setShowResultPage(true);
    store.setShowDropdown(false);
  };
  if (isFilteredEmpty) {
    return (
      <div className={classes.component} ref={dropdownRef}>
        <p className={classes.noResult}>По вашему запросу ничего не найдено</p>
      </div>
    );
  }
  return (
    <div className={classes.component} ref={dropdownRef}>
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
