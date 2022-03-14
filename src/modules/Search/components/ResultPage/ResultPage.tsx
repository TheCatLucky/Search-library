import React, { useState } from 'react';
import Pagination from '@ff/ui-kit/lib/Pagination';
import Button from '@ff/ui-kit/lib/Button';
import { Title } from '@ff/ui-kit/lib/Typography';

import { CategoryModel, ItemModel } from '../../models';
import SearchItem from '../SearchItem';

type Props = {
  categories: CategoryModel[];
  resultPageAllItems: ItemModel[];
  searchValue: string;
  increaseFrequency: (item: ItemModel) => void;
  onItemClick: (item: ItemModel) => void;
};

const ResultPage: React.FC<Props> = (props) => {
  const {
    categories,
    resultPageAllItems,
    searchValue,
    onItemClick,
    increaseFrequency,
  } = props;
  const [currentTab, setCurrentTab] = useState(0);
  const [page, setPage] = React.useState(1);
  const handleButtonClick = (value: number) => {
    setCurrentTab(value);
  };
  const perPage = 10;
  const paginationItemsCount = currentTab === 0
    ? resultPageAllItems.length
    : categories[currentTab - 1].items.length;

  return (
    <div>
      <div>
        <Title bold level={4} className="resultPage-searchValue">
          Результаты поиска по : <span>«{searchValue}»</span>
        </Title>
      </div>
      <div>
        <Button
          className={
            currentTab === 0
              ? 'resultPage-tab_selected resultPage-tab'
              : 'resultPage-tab'
          }
          onClick={() => handleButtonClick(0)}
        >
          Все <span>{resultPageAllItems.length}</span>
        </Button>
        {categories.map((category) => (
          <Button
            className={
              currentTab === category.id
                ? 'resultPage-tab_selected resultPage-tab'
                : 'resultPage-tab'
            }
            key={category.id}
            onClick={() => handleButtonClick(category.id)}
          >
            {category.title} <span>{category.items.length}</span>
          </Button>
        ))}
      </div>
      {currentTab === 0
        && resultPageAllItems
          .slice(0 + perPage * (page - 1), perPage * page)
          .map((item) => (
            <SearchItem
              item={item}
              logo={item.logo}
              key={item.name}
              link={item.link}
              onItemClick={onItemClick}
              increaseFrequency={increaseFrequency}
            />
          ))}
      {currentTab !== 0
        && categories[currentTab - 1].items
          .slice(0 + perPage * (page - 1), perPage * page)
          .map((item) => (
            <SearchItem
              item={item}
              logo={categories[currentTab - 1].logo}
              key={item.id}
              link={item.link}
              onItemClick={onItemClick}
              increaseFrequency={increaseFrequency}
            />
          ))}
      <Pagination
        siblingCount={2}
        itemCount={paginationItemsCount}
        perPage={perPage}
        currentPage={page}
        onChangeCurrentPage={setPage}
        className="resultPage-pagination"
      />
    </div>
  );
};

export default ResultPage;
