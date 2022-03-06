import { TextField } from '@ff/ui-kit';
import Icon from '@ff/ui-kit/lib/Icon';
import { observer } from 'mobx-react-lite';
import React from 'react';

import SearchStore from '../../store';
import classes from './Search.module.scss';
import SearchDropdown from './SearchDropdown';

type Props = {
  store: SearchStore;
  onSearch: () => Promise<void> | void;
};

const Search: React.FC<Props> = (props) => {
  const { onSearch, store } = props;
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    store.setSearchValue(event.target.value);
    onSearch();
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
