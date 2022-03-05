import React, { useEffect, useState } from 'react';
import Icon from '@ff/ui-kit/lib/Icon';
import { observer } from 'mobx-react-lite';
import { TextField } from '@ff/ui-kit';
import { toJS } from 'mobx';

import classes from './Search.module.scss';
import SearchDropdown from './SearchDropdown';
import SearchStore from '../../store';

type Props = {
  store: SearchStore;
  onSearch: () => Promise<void> | void;
};

const Search: React.FC<Props> = (props) => {
  const { store, onSearch } = props;
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    store.setSearchValue(event.target.value);
    onSearch();
    // console.log(toJS(store.items));
  };
  return (
    <div className={classes.component}>
      <div className={classes.search}>
        <TextField
          className={classes.searchField}
          type="text"
          value={store.searchValue}
          onChange={handleSearch}
          placeholder="search..."
        />
        <Icon name="search" className={classes.serachIcon} />
        <Icon name="tune" className={classes.extendedSerachIcon} />
      </div>
      {store.searchValue && <SearchDropdown store={store} />}
    </div>
  );
};

export default observer(Search);
