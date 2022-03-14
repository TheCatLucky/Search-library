import SystemName from '@ff/ui-kit/lib/SystemName';
import React from 'react';
import { Link } from '@ff/ui-kit/lib/Typography';

import { ItemModel } from '../../../models';

type Props = {
  item: ItemModel;
  logo?: string;
  link?: string;
  onItemClick?: () => void;
};

const SearchItem: React.FC<Props> = (props) => {
  const { item, logo, onItemClick, link } = props;
  const created = item.created.toLocaleDateString();
  const updated = item.updated.toLocaleDateString();
  return (
    <div className="searchItem-component">
      <SystemName logo={item.logo || logo} className="searchItem-logo" />
      <div className="searchItem-mainInfo">
        <div
          className="searchItem-itemName"
          onClick={onItemClick}
          onKeyPress={onItemClick}
          role="button"
          tabIndex={0}
          style={onItemClick && { cursor: 'pointer' }}
        >
          {link ? (
            <Link href={link} target="_blank" rel="noreferrer">
              {item.name}
            </Link>
          ) : (
            <span>{item.name}</span>
          )}
        </div>
        <div className="searchItem-shortInfo">
          {item.data.map((field) => (
            <p key={field.name}>
              {field.name}:<span>{field.value}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="searchItem-date">
        Дата создания: <span>{created}</span>
      </div>
      <div className="searchItem-date">
        Последнее исправление: <span>{updated}</span>
      </div>
    </div>
  );
};
export default SearchItem;
