import { toJS } from 'mobx';
import React from 'react';

import ItemModel from '../../../../models/ItemModel';
import SearchItem from '../SearchItem';
import classes from './SearchCategory.module.scss';

type Props = {
  store: ItemModel[];
  name: string;
};

const SearchCategory: React.FC<Props> = (props) => {
  const { store, name } = props;
  console.log(toJS(store));
  return (
    <div className={classes.component}>
      <h3>{name}</h3>
      <div>
        {store.map((info) => (
          <div key={info.id} className={classes.componentItem}>
            <SearchItem store={info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCategory;
