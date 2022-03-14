import TextField from '@ff/ui-kit/lib/TextField';
import { observer } from 'mobx-react-lite';
import React from 'react';

import SearchStore from '../../store';
import ResultPage from '../ResultPage';
import SearchDropdown from '../SearchDropdown';

type Props = {
  store: SearchStore;
  limit?: number;
};

const Search: React.FC<Props> = (props) => {
  const { store, limit } = props;
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    store.setShowDropdown(true);
    store.setSearchValue(event.target.value);
    if (limit) {
      store.setLimit(limit);
    }
    store.setFilteredDate(store.filteredItems);
  };

  if (!store.searchValue) {
    store.setShowDropdown(false);
  }
  return (
    <div className="Search-component">
      <div className="Search-search">
        <TextField
          className="Search-searchField"
          type="text"
          value={store.searchValue}
          onChange={handleSearch}
          placeholder="Поиск..."
          startAdornment="search"
          endAdornment="tune"
        />
      </div>
      {store.showDropdown && <SearchDropdown store={store} />}
      {store.showResultPage && (
        <ResultPage
          categories={store.resultPageData}
          searchValue={store.resultSearchValue}
          resultPageAllItems={store.resultPageAllItems}
        />
      )}
    </div>
  );
};

export default observer(Search);
