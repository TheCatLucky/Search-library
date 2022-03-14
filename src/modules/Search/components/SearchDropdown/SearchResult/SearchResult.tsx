import React from 'react';
import { Title } from '@ff/ui-kit/lib/Typography';

import { CategoryModel } from '../../../models';
import SearchItem from '../SearchItem';

type Props = {
  categories: CategoryModel[];
};

const SearchResult: React.FC<Props> = (props) => {
  const { categories } = props;
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
                <SearchItem item={item} logo={category.logo} key={item.id} />
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
