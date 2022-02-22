import React, { useState } from 'react';
import Icon from '@ff/ui-kit/lib/Icon';

import classes from './Search.module.scss';
import SearchDropdown from './SearchDropdown';

type Props = {};

const Search: React.FC<Props> = (props) => {
  const [search, setSearch] = useState('');

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
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
      {search && <SearchDropdown />}
    </div>
  );
};

export default Search;
