import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { ItemModel } from '../../models';
import SearchStore from '../../store';
import SearchResult from '../SearchResult';

type Props = {
  store: SearchStore;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowResultPage: React.Dispatch<React.SetStateAction<boolean>>;
  increaseFrequency: (item: ItemModel) => void;
  onItemClick: (item: ItemModel) => void;
};

const SearchDropdown: React.FC<Props> = (props) => {
  const {
    store,
    setShowDropdown,
    setShowResultPage,
    onItemClick,
    increaseFrequency,
  } = props;
  const { setResultPageData, setResultPageAllItems, setResultSearchValue } =
    store;

  const handleResultPage = () => {
    // Поправить костыль
    //store.setFilteredDate(store.filteredItems);
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
      <div className="searchDropdown-component">
        <p className="searchDropdown-noResult">
          По вашему запросу ничего не найдено
        </p>
      </div>
    );
  }

  return (
    <div className="searchDropdown-component">
      <div className="searchDropdown-scroll">
        <SearchResult
          categories={store.dropdownWithLimit}
          onItemClick={onItemClick}
          increaseFrequency={increaseFrequency}
        />
      </div>
      <div className="searchDropdown-showAll">
        <Button type="primary" onClick={handleResultPage}>
          Показать все результаты
        </Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
