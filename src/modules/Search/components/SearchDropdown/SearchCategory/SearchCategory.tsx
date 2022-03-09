import React from 'react';

import Title from '@ff/ui-kit/lib/esm/components/Typography/Title';
import { ItemModel, DataModel } from '../../../models';
import SearchItem from '../SearchItem';
import classes from './SearchCategory.module.scss';

type Props = {
  filteredStore: DataModel[];
  limit: number;
};

const SearchCategory: React.FC<Props> = (props) => {
  const { filteredStore, limit } = props;
  let i = 0;
  return (
    <>
      {filteredStore.map((category) => {
        if (category.items.length >= 1) {
          return (
            <div className={classes.component} key={category.id}>
              <Title bold={true} level={5} className={classes.title}>
                {category.title}
              </Title>
              {category.items.map((item: ItemModel) => {
                i += 1;
                if (i <= limit) {
                  return (
                    <div key={item.id} className={classes.Item}>
                      <SearchItem itemStore={item} logo={category.logo} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SearchCategory;
