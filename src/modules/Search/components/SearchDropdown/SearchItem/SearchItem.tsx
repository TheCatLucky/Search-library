import React from 'react';

import { ItemModel } from '../../../models';
import classes from './SearchItem.module.scss';

type Props = {
  itemStore: ItemModel;
  logo?: string;
};

const SearchItem: React.FC<Props> = (props) => {
  const { itemStore, logo } = props;
  const create = itemStore.create.toLocaleDateString();
  const update = itemStore.update.toLocaleDateString();
  return (
    <div className={classes.component}>
      <div className={classes.logo}>
        <img src={logo} alt="лого" />
      </div>
      <div className={classes.mainInfo}>
        <div className={classes.itemName}>{itemStore.name}</div>
        <div className={classes.shortInfo}>
          {Object.keys(itemStore.data).map((item) => (
            <p key={item}>
              {item}:<span>{itemStore.data[item]}</span>
            </p>
          ))}
        </div>
      </div>
      <div className={classes.date}>
        Дата создания: <span>{create}</span>
      </div>
      <div className={classes.date}>
        Последнее исправление: <span>{update}</span>
      </div>
    </div>
  );
};
export default SearchItem;
