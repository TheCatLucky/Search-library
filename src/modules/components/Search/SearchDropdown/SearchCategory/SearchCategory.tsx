import React from 'react';

import { ItemModel, DataModel } from '../../../../models';
import SearchItem from '../SearchItem';
import classes from './SearchCategory.module.scss';

type Props = {
  store: DataModel[];
};

const SearchCategory: React.FC<Props> = (props) => {
  const { store } = props;
  return (
    <>
      {store.map((category) => {
        if (category.items.length >= 1) {
          return (
            <div className={classes.component} key={category.id}>
              <h3>{category.title}</h3>
              <div>
                {category.items.map((item: ItemModel) => (
                  <div key={item.id} className={classes.componentItem}>
                    <SearchItem store={item} />
                  </div>
                ))}
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
