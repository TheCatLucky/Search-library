import React from 'react';

import { ItemModel } from '../../../../models';
import classes from './SearchItem.module.scss';

type Props = {
  store: ItemModel;
  logo: string | undefined;
};

const SearchItem: React.FC<Props> = (props) => {
  const { store, logo } = props;
  const createDate = store.createDate.toLocaleDateString();
  const updateDate = store.updateDate.toLocaleDateString();
  return (
    <div className={classes.component}>
      <div className={classes.logo}>
        <img src={logo} alt="лого" />
      </div>
      <div className={classes.mainInfo}>
        <div className={classes.itemName}>{store.name}</div>
        <div className={classes.shortInfo}>
          {Object.keys(store.data).map((item) => (
            <p key={item}>
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
