import SystemName from '@ff/ui-kit/lib/SystemName';
import React from 'react';

import { ItemModel } from '../../models';

type Props = {
  item: ItemModel;
  increaseFrequency: (item: ItemModel) => void;
  logo?: string;
  link?: string;
  onItemClick: (item: ItemModel) => void;
};

const SearchItem: React.FC<Props> = (props) => {
  const {
    item, logo, onItemClick, link, increaseFrequency,
  } = props;
  const created = item.created.toLocaleDateString();
  const updated = item.updated.toLocaleDateString();
  const handleClick = () => {
    increaseFrequency(item);
    onItemClick(item);
  };
  return (
    <div className="searchItem-component">
      <SystemName logo={item.logo || logo} className="searchItem-logo" />
      <div className="searchItem-mainInfo">
        <div className="searchItem-itemName">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={handleClick}
            >
              {item.name}
            </a>
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
