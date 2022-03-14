import React, { useState } from 'react';
import Pagination from '@ff/ui-kit/lib/Pagination';

import { CategoryModel, ItemModel } from '../../models';
import classes from './ResultPage.module.scss';
import SearchItem from '../SearchDropdown/SearchItem';
import Button from '@ff/ui-kit/lib/Button';
import Typography from '@ff/ui-kit/lib/Typography';

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
        <Typography.Title level={4} bold={true} className={classes.searchValue}>
          Результаты поиска по : <span>«{searchValue}»</span>
        </Typography.Title>
        {/* <h2 className={classes.searchValue}>
          Результаты поиска по : <span>«{searchValue}»</span>
        </h2> */}
      </div>
      <div>
        <Button
          className={currentTab === 0 ? classes.tab_selected : classes.tab}
          onClick={() => handleButtonClick(0)}
        >
          Все <span>{resultPageAllItems.length}</span>
        </Button>
        {categories.map((category) => (
          <Button
            className={
              currentTab === category.id ? classes.tab_selected : classes.tab
            }
            key={category.id}
            onClick={() => handleButtonClick(category.id)}
          >
            {category.title} <span>{category.items.length}</span>
          </Button>
        ))}
      </div>
      {currentTab === 0 &&
        resultPageAllItems
          .slice(0 + 10 * (page - 1), 10 * page)
          .map((item) => (
            <SearchItem
              itemStore={item}
              logo={item.logo}
              key={item.name}
              link={item.link}
            />
          ))}
      {currentTab !== 0 &&
        categories[currentTab - 1].items
          .slice(0 + 10 * (page - 1), 10 * page)
          .map((item) => (
            <SearchItem
              itemStore={item}
              logo={categories[currentTab - 1].logo}
              key={item.id}
              link={item.link}
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
