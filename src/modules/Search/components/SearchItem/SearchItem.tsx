import { Link } from '@ff/ui-kit/lib/Typography';
import React from 'react';

import { ItemModel } from '../../models';

type Props = {
  item: ItemModel;
  onItemClick: (item: ItemModel) => void;
  setShowDropdown?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchItem: React.FC<Props> = (props) => {
  const { item, onItemClick, setShowDropdown } = props;
  const created = item.created.toLocaleDateString();
  const updated = item.updated.toLocaleDateString();

  const handleClick = () => {
    onItemClick(item);
    setShowDropdown?.(false);
  };

  return (
    <div className="searchItem-component">
      <div className="searchItem-row">
        <div className="searchItem-logo">
          <img src={item.logo} alt="Лого" />
        </div>
        <div className="searchItem-mainInfo">
          <div className="searchItem-itemName">
            <Link onClick={handleClick}>{item.name}</Link>
          </div>
          <div className="searchItem-shortInfo">
            {item.data.map((field) => (
              <p key={field.name}>
                {field.name}:<span> {field.value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="searchItem-row">
        <div className="searchItem-date">
          Дата создания:<span> {created}</span>
        </div>
        <div className="searchItem-date">
          Последнее исправление:<span> {updated}</span>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
