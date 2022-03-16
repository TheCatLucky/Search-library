import React from 'react';
import { Title } from '@ff/ui-kit/lib/Typography';

import { CategoryModel, ItemModel } from '../../models';
import SearchItem from '../SearchItem';

type Props = {
  categories: CategoryModel[];
  onItemClick: (item: ItemModel) => void;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchResult: React.FC<Props> = (props) => {
  const { categories, onItemClick, setShowDropdown } = props;

  return (
    <>
      {categories.map((category) => {
        if (category.items.length >= 1) {
          return (
            <div className="searchResult-component" key={category.id}>
              <Title bold level={5} className="searchResult-title">
                {category.title}
              </Title>
              {category.items.map((item) => (
                <SearchItem
                  item={item}
                  key={item.id}
                  onItemClick={onItemClick}
                  setShowDropdown={setShowDropdown}
                />
              ))}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SearchResult;
