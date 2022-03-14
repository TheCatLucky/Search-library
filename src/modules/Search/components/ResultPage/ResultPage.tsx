import React, { useState } from 'react';
import Pagination from '@ff/ui-kit/lib/Pagination';
import Button from '@ff/ui-kit/lib/Button';
import { Title } from '@ff/ui-kit/lib/Typography';

import { CategoryModel, ItemModel } from '../../models';
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
    <div>
      <div>
        <Title className="ResultPage-searchValue">
          Результаты поиска по : <span>«{searchValue}»</span>
        </Title>
      </div>
      <div>
        <Button
          className={
            currentTab === 0 ? 'ResultPage-tab_selected' : 'ResultPage-tab'
          }
          onClick={() => handleButtonClick(0)}
        >
          Все <span>{resultPageAllItems.length}</span>
        </Button>
        {categories.map((category) => (
          <Button
            className={
              currentTab === category.id
                ? 'ResultPage-tab_selected'
                : 'ResultPage-tab'
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
              item={item}
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
              item={item}
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
        className="ResultPage-pagination"
      />
    </div>
  );
};

export default ResultPage;
