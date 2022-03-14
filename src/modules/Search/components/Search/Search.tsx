import TextField from '@ff/ui-kit/lib/TextField';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import { ItemModel } from '../../models';
import SearchStore from '../../store';
import ResultPage from '../ResultPage';
import SearchDropdown from '../SearchDropdown';

type Props = {
  store: SearchStore;
  limit?: number;
  onItemClick: (item: ItemModel) => void;
};

const Search: React.FC<Props> = (props) => {
  const { store, limit, onItemClick } = props;
  const {
    setSearchValue, setFilteredDate, setLimit, increaseFrequency,
  } = store;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResultPage, setShowResultPage] = useState(false);
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setShowDropdown(true);
    setSearchValue(event.target.value);
    setFilteredDate(store.filteredItems);
  };

  if (limit) {
    setLimit(limit);
  }

  if (!store.searchValue) {
    // setShowDropdown(false);
  }
  return (
    <div className="search-component">
      <div className="search-search">
        <TextField
          className="search-searchField"
          type="text"
          value={store.searchValue}
          onChange={handleSearch}
          placeholder="Поиск..."
          startAdornment="search"
          endAdornment="tune"
        />
      </div>
      {showDropdown && (
        <SearchDropdown
          store={store}
          setShowDropdown={setShowDropdown}
          setShowResultPage={setShowResultPage}
          onItemClick={onItemClick}
          increaseFrequency={increaseFrequency}
        />
      )}
      {showResultPage && (
        <ResultPage
          categories={store.resultPageData}
          searchValue={store.resultSearchValue}
          resultPageAllItems={store.resultPageAllItems}
          onItemClick={onItemClick}
          increaseFrequency={increaseFrequency}
        />
      )}
    </div>
  );
};

export default observer(Search);
