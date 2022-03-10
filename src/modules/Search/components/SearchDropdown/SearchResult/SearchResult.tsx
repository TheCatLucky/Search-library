import React from 'react';

import { Title } from '@ff/ui-kit/lib/Typography';
import { CategoryModel } from '../../../models';
import SearchItem from '../SearchItem';
import classes from './SearchResult.module.scss';

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
            <div className={classes.component} key={category.id}>
              <Title bold={true} level={5} className={classes.title}>
                {category.title}
              </Title>
              {category.items.map((item) => (
                <SearchItem
                  itemStore={item}
                  logo={category.logo}
                  key={item.id}
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
