import { TextField } from '@ff/ui-kit';
import Icon from '@ff/ui-kit/lib/Icon';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ItemModel } from '../../models';

import SearchStore from '../../store';
import classes from './Search.module.scss';
import SearchDropdown from './SearchDropdown';

type Props = {
  store: SearchStore;
  limit: number;
};

const Search: React.FC<Props> = (props) => {
  const {  store, limit } = props;
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    store.setSearchValue(event.target.value);
    store.setLimit(limit);
    const filteredItems = store.items.map((category) => ({
      ...category,
      items: category.items.filter((item: ItemModel) =>
        item.name.toLowerCase().includes(store.searchValue.toLowerCase())
      ),
    }));
    store.setFilteredDate(filteredItems);
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
