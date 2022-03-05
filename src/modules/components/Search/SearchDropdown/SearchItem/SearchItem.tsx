import React from 'react';
import { toJS } from 'mobx';

import { Class, DataSource, DataObject } from '../../../../models/data';
import ItemModel from '../../../../models/ItemModel';
import classes from './SearchItem.module.scss';

type Props = {
  data: ItemModel;
};

const SearchItem: React.FC<Props> = (props) => {
  const { data } = props;
  console.log(toJS(data));
  const createDate = data.createDate.toLocaleDateString();
  const updateDate = data.updateDate.toLocaleDateString();

  return (
    <div className={classes.component}>
      <div className={classes.mainInfo}>
        <div className={classes.itemName}>{data.name}</div>
        <div className={classes.shortInfo}>
          {Object.keys(data.data).map((item) => (
            <p>
              {item}:<span>{data.data[item]}</span>
            </p>
          ))}
        </div>
      </div>
      <div className={classes.date}>
        Дата создания: <span>{createDate}</span>
      </div>

      <div className={classes.date}>
        Последнее исправление: <span>{updateDate}</span>
      </div>
    </div>
  );
};
export default SearchItem;
