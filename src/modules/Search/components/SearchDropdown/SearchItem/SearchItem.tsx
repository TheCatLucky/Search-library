import SystemName from '@ff/ui-kit/lib/SystemName';
import React from 'react';

import { ItemModel } from '../../../models';
import classes from './SearchItem.module.scss';
import Typography from '@ff/ui-kit/lib/Typography';

type Props = {
  itemStore: ItemModel;
  logo?: string;
  link?: string;
  onItemClick?: () => void;
};

const SearchItem: React.FC<Props> = (props) => {
  const { itemStore, logo, onItemClick, link } = props;
  const created = itemStore.created.toLocaleDateString();
  const updated = itemStore.updated.toLocaleDateString();
  return (
    <div className={classes.component}>
      <SystemName logo={itemStore.logo || logo} className={classes.logo} />
      <div className={classes.mainInfo}>
        <div
          className={classes.itemName}
          onClick={onItemClick}
          onKeyPress={onItemClick}
          role="button"
          tabIndex={0}
          style={onItemClick && { cursor: 'pointer' }}
        >
          {link ? (
            <Typography.Link href={link} target="_blank" rel="noreferrer">
              {itemStore.name}
            </Typography.Link>
          ) : (
            <span>{itemStore.name}</span>
          )}
        </div>
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
