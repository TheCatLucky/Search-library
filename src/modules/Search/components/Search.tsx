import TextField from '@ff/ui-kit/lib/esm/components/TextField';
import { observer } from 'mobx-react-lite';
import React from 'react';

import SearchStore from '../store';
import classes from './Search.module.scss';
import SearchDropdown from './SearchDropdown';

type Props = {
  store: SearchStore;
  limit: number;
};

const Search: React.FC<Props> = (props) => {
  const { store, limit } = props;
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    store.setSearchValue(event.target.value);
    store.setLimit(limit);
    store.setFilteredDate(store.filteredItems);
  };
  return (
    <div className={classes.component}>
      <div className={classes.search}>
        <TextField
          className={classes.searchField}
          type="text"
          value={store.searchValue}
          onChange={handleSearch}
          placeholder="Поиск..."
          startAdornment="search"
          endAdornment="tune"
        />
      </div>
      {store.searchValue && <SearchDropdown store={store} />}
    </div>
  );
};

export default observer(Search);
