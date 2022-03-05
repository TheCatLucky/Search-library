import { toJS } from 'mobx';
import React from 'react';

import ItemModel from '../../../../models/ItemModel';
import SearchItem from '../SearchItem';
import classes from './SearchCategory.module.scss';

type Props = {
  data: ItemModel[];
  name: string;
};

const SearchCategory: React.FC<Props> = (props) => {
  const { data, name } = props;
  console.log(toJS(data));
  return (
    <div className={classes.component}>
      <h3>{name}</h3>
      <div>
        {data.map((info) => (
          <div key={info.id} className={classes.componentItem}>
            <SearchItem data={info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCategory;
