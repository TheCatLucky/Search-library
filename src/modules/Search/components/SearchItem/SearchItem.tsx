import { Link } from '@ff/ui-kit/lib/Typography';
import React from 'react';

import { ItemModel } from '../../models';

type Props = {
  item: ItemModel;
  logo?: string;
  link?: string;
  onItemClick: (item: ItemModel) => void;
};

const SearchItem: React.FC<Props> = (props) => {
  const { item, logo, onItemClick, link } = props;
  const created = item.created.toLocaleDateString();
  const updated = item.updated.toLocaleDateString();

  const handleClick = () => {
    onItemClick(item);
  };

  return (
    <div className="searchItem-component">
      <div className="searchItem-logo">
        <img src={item.logo || logo} alt="Лого" />
      </div>
      <div className="searchItem-mainInfo">
        <div className="searchItem-itemName">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={handleClick}
            >
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
