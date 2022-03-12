import React, { useState } from 'react';
import { CategoryModel, ItemModel } from '../../models';

import classes from './ResultPage.module.scss';

import Pagination from '@ff/ui-kit/lib/Pagination';
import SearchItem from '../SearchDropdown/SearchItem';

type Props = {
  categories: CategoryModel[];
  resultPageAllItems: ItemModel[];
  searchValue: string;
};

const ResultPage: React.FC<Props> = (props) => {
  const { categories, resultPageAllItems, searchValue } = props;
  const [currentTab, setCurrentTab] = useState(0);
  const [page, setPage] = React.useState(1);
  const handleButtonClick = (value: number) => {
    setCurrentTab(value);
  };

  const paginationItemsCount =
    currentTab === 0
      ? resultPageAllItems.length
      : categories[currentTab - 1].items.length;

  return (
    <div className={classes.component}>
      <div>
        <h2 className={classes.searchValue}>
          Результаты поиска по : <span>«{searchValue}»</span>
        </h2>
      </div>
      <div>
        <button
          type="button"
          className={currentTab === 0 ? classes.tab_selected : classes.tab}
          onClick={() => handleButtonClick(0)}
        >
          Все <span>{resultPageAllItems.length}</span>
        </button>
        {categories.map((category) => (
          <button
            type="button"
            className={
              currentTab === category.id ? classes.tab_selected : classes.tab
            }
            key={category.id}
            onClick={() => handleButtonClick(category.id)}
          >
            {category.title} <span>{category.items.length}</span>
          </button>
        ))}
      </div>
      {currentTab === 0 &&
        resultPageAllItems
          .slice(0 + 10 * (page - 1), 10 * page)
          .map((item) => (
            <SearchItem itemStore={item} logo={item.logo} key={item.name} />
          ))}
      {currentTab !== 0 &&
        categories[currentTab - 1].items
          .slice(0 + 10 * (page - 1), 10 * page)
          .map((item) => (
            <SearchItem
              itemStore={item}
              logo={categories[currentTab - 1].logo}
              key={item.id}
            />
          ))}
      <Pagination
        siblingCount={2}
        itemCount={paginationItemsCount}
        perPage={10}
        currentPage={page}
        onChangeCurrentPage={setPage}
        className={classes.pagination}
      />
    </div>
  );
};

export default ResultPage;
