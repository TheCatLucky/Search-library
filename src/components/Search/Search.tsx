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
  const dataCalc = toJS(filteredData);
  const [search, setSearch] = useState('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  // TODO : простой поиск производится только по названию сущности.

  /* const result = Object.entries(dataCalc).map((item) =>
    item[1].map((d) => d.attributes.filter((word) => word.includes('и'))),
  ); */

  /*   const resul = Array.of(...Object.values(dataCalc)).map((item) =>
    item.map((it) =>
      it.attributes.filter((i) => i.toLowerCase().includes(term.toLowerCase()))
    )
  ); */
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
      {search && <SearchDropdown filteredData={filteredData} />}
    </div>
  );
};

export default observer(Search);
