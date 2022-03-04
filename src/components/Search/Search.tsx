import React, { useEffect, useState } from 'react';
import Icon from '@ff/ui-kit/lib/Icon';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import classes from './Search.module.scss';
import SearchDropdown from './SearchDropdown';
import { Data } from '../../models/data';
import searchStore from '../../stores/searchStore';

type Props = {
  data: Data;
};

const Search: React.FC<Props> = ({ data }) => {
  const { filteredData, term } = searchStore;
  const [search, setSearch] = useState('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    searchStore.setData(data);
  }, []);
  useEffect(() => {
    searchStore.setFilter(search);
  }, [search]);
  return (
    <div className={classes.component}>
      <div className={classes.search}>
        <Icon name="search" className={classes.serachIcon} />
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="search..."
        />
        <Icon name="tune" className={classes.extendedSerachIcon} />
      </div>
      {search && <SearchDropdown filteredData={filteredData} term={term} />}
    </div>
  );
};

export default observer(Search);
