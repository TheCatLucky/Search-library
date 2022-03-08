import React from 'react';

import { ItemModel, DataModel } from '../../../../models';
import SearchItem from '../SearchItem';
import classes from './SearchCategory.module.scss';

type Props = {
  store: DataModel[];
  limit: number;
};

const SearchCategory: React.FC<Props> = (props) => {
  const { store, limit } = props;
  let i = 0;
  return (
    <>
      {store.map((category) => {
        if (category.items.length >= 1) {
          return (
            <div className={classes.component} key={category.id}>
              <h3 className={classes.title}>{category.title}</h3>
              <div>
                {category.items.map((item: ItemModel) => {
                  i += 1;
                  if (i <= limit) {
                    return (
                      <div key={item.id} className={classes.componentItem}>
                        <SearchItem store={item} logo={category.logo} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SearchCategory;
