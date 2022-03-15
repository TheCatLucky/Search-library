import Button from '@ff/ui-kit/lib/Button';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';

import { ItemModel } from '../../models';
import SearchStore from '../../store';
import SearchResult from '../SearchResult';

type Props = {
  store: SearchStore;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowResultPage: React.Dispatch<React.SetStateAction<boolean>>;
  onItemClick: (item: ItemModel) => void;
};

const SearchDropdown: React.FC<Props> = (props) => {
  const { store, setShowDropdown, setShowResultPage, onItemClick } = props;
  const { setResultPageData, setResultPageAllItems, setResultSearchValue } =
    store;

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleResultPage = () => {
    setResultPageData();
    setResultPageAllItems();
    setResultSearchValue();
    setShowResultPage(true);
    setShowDropdown(false);
  };

  const removeDropdown = (event: MouseEvent) => {
    if (!dropdownRef.current?.contains(event.target as HTMLElement)) {
      setShowDropdown(false);
    }
  };

  const forceSearch = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleResultPage();
    }
  };

  useEffect(() => {
    document.addEventListener('click', removeDropdown);
    document.addEventListener('keydown', forceSearch);

    return () => {
      document.removeEventListener('click', removeDropdown);
      document.removeEventListener('keydown', forceSearch);
    };
  }, []);

  const isFilteredEmpty = store.filteredData.reduce(
    (isEmpty, category) => category.items.length === 0 && isEmpty,
    true
  );

  if (isFilteredEmpty) {
    return (
      <div className="searchDropdown-component" ref={dropdownRef}>
        <p className="searchDropdown-noResult">
          По вашему запросу ничего не найдено
        </p>
      </div>
    );
  }

  return (
    <div className="searchDropdown-component" ref={dropdownRef}>
      <div className="searchDropdown-scroll">
        <SearchResult
          categories={store.limitedCategories}
          onItemClick={onItemClick}
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
