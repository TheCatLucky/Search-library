import React from 'react';
import { toJS } from 'mobx';

import { Class, DataSource, DataObject } from '../../tests/data';
import ItemModel from '../../../../models/ItemModel';
import classes from './SearchItem.module.scss';

type Props = {
  store: ItemModel;
};

const SearchItem: React.FC<Props> = (props) => {
  const { store } = props;
  console.log(toJS(store));
  const createDate = store.createDate.toLocaleDateString();
  const updateDate = store.updateDate.toLocaleDateString();

  return (
    <div className={classes.component}>
      <div className={classes.mainInfo}>
        <div className={classes.itemName}>{store.name}</div>
        <div className={classes.shortInfo}>
          {Object.keys(store.data).map((item) => (
            <p>
              {item}:<span>{store.data[item]}</span>
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
