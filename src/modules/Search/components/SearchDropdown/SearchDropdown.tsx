import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React from 'react';

import SearchStore from '../../store';
import SearchResult from './SearchResult';

type Props = {
  store: SearchStore;
};

const SearchDropdown: React.FC<Props> = ({ store }) => {
  const {
    setResultPageData,
    setResultPageAllItems,
    setResultSearchValue,
    setShowResultPage,
    setShowDropdown,
  } = store;

  const handleResultPage = () => {
    setResultPageData();
    setResultPageAllItems();
    setResultSearchValue();
    setShowResultPage(true);
    setShowDropdown(false);
  };

  const isFilteredEmpty = store.filteredData.reduce(
    (isEmpty, category) => category.items.length === 0 && isEmpty,
    true
  );

  if (isFilteredEmpty) {
    return (
      <div className="SearchDropdown-component">
        <p className="SearchDropdown-noResult">
          По вашему запросу ничего не найдено
        </p>
      </div>
    );
  }

  return (
    <div className="SearchDropdown-component">
      <div className="SearchDropdown-scroll">
        <SearchResult categories={store.categories} />
      </div>
      <div className="SearchDropdown-showAll">
        <Button type="primary" onClick={handleResultPage}>
          Показать все результаты
        </Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
