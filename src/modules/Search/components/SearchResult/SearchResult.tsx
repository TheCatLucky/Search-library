import React from 'react';
import { Title } from '@ff/ui-kit/lib/Typography';

import { CategoryModel, ItemModel } from '../../models';
import SearchItem from '../SearchItem';

type Props = {
  categories: CategoryModel[];
  onItemClick: (item: ItemModel) => void;
};

const SearchResult: React.FC<Props> = (props) => {
  const { categories, onItemClick } = props;

  return (
    <>
      {categories.map((category) => {
        if (category.items.length >= 1) {
          return (
            <div className="SearchResult-component" key={category.id}>
              <Title bold level={5} className="SearchResult-title">
                {category.title}
              </Title>
              {category.items.map((item) => (
                <SearchItem
                  item={item}
                  logo={category.logo}
                  key={item.id}
                  link={item.link}
                  onItemClick={onItemClick}
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
