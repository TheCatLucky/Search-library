import TextField from '@ff/ui-kit/lib/TextField';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import { ItemModel } from '../../models';
import SearchStore from '../../store';
import SearchDropdown from '../SearchDropdown';

type Props = {
  showResultPage: React.Dispatch<React.SetStateAction<boolean>>;
  store: SearchStore;
  limit?: number;
  onItemClick: (item: ItemModel) => void;
};

const Search: React.FC<Props> = (props) => {
  const {
    store,
    limit,
    onItemClick,
    showResultPage: setShowResultPage,
  } = props;
  const { setSearchValue, setFilteredDate, setLimit } = store;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length > 0) {
      setShowDropdown(true);
      setSearchValue(event.target.value);
      setFilteredDate(store.filteredItems);
    } else {
      setShowDropdown(false);
      setSearchValue(event.target.value);
    }
  };

  if (limit) {
    setLimit(limit);
  }
  /*
    Как сделать правильно метод onFocus, чтобы при клике вызывалось окно?
    Мое предположение что нужно передать ref Текстового поля, чтобы
    SearchDropdown проверял не только себя.
  */
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
        />
      )}
    </div>
  );
};

export default observer(Search);
