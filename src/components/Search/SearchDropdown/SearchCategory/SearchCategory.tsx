import React from 'react';

import { Class, DataSource, DataObject } from '../../../../models/data';
import SearchItem from '../SearchItem';
import classes from './SearchCategory.module.scss';

type Props = {
  data: Array<Class | DataSource | DataObject>;
  name: string;
};

const SearchCategory: React.FC<Props> = ({ data, name }) => (
  <div className={classes.component}>
    <h3>{name}</h3>
    <div>
      {data.map((info) => (
        <div key={info.id}>
          <SearchItem data={info} />
        </div>
      ))}
    </div>
  </div>
);

export default SearchCategory;
