import React from 'react';

import { ItemModel } from '../../../models';
import classes from './SearchItem.module.scss';

type Props = {
  itemStore: ItemModel;
  logo?: string;
};

const SearchItem: React.FC<Props> = (props) => {
  const { itemStore, logo } = props;
  const created = itemStore.created.toLocaleDateString();
  const updated = itemStore.updated.toLocaleDateString();
  return (
    <div className={classes.component}>
      <div className={classes.logo}>
        <img src={itemStore.logo || logo} alt="лого" />
      </div>
      <div className={classes.mainInfo}>
        <div className={classes.itemName}>{itemStore.name}</div>
        <div className={classes.shortInfo}>
          {itemStore.data.map((item) => (
            <p key={item.name}>
              {item.name}:<span>{item.value}</span>
            </p>
          ))}
        </div>
      </div>
      <div className={classes.date}>
        Дата создания: <span>{created}</span>
      </div>
      <div className={classes.date}>
        Последнее исправление: <span>{updated}</span>
      </div>
    </div>
  );
};
export default SearchItem;
