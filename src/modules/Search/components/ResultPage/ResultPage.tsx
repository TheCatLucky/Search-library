import React, { useEffect, useState } from 'react';
import Pagination from '@ff/ui-kit/lib/Pagination';
import Button from '@ff/ui-kit/lib/Button';
import { Title } from '@ff/ui-kit/lib/Typography';
import { observer } from 'mobx-react-lite';

import { ItemModel } from '../../models';
import SearchItem from '../SearchItem';
import SearchStore from '../../store/searchStore';

type Props = {
  store: SearchStore;
  onItemClick: (item: ItemModel) => void;
};

const ResultPage: React.FC<Props> = (props) => {
  const { onItemClick, store } = props;
  const {
    resultPageData: categories,
    resultPageAllItems,
    resultSearchValue: searchValue,
  } = store;

  const [currentTab, setCurrentTab] = useState(0);
  const [page, setPage] = React.useState(1);

  const perPage = 10;
  const paginationItemsCount =
    currentTab === 0
      ? resultPageAllItems.length
      : categories[currentTab - 1].items.length;

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  const handleButtonClick = (value: number) => {
    setCurrentTab(value);
    setPage(1);
  };

  const changePage = (currentPage: number) => {
    setPage(currentPage);
    window.scrollTo(0, 0);
  };
  return (
    <div className="resultPage">
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
      {currentTab === 0 &&
        resultPageAllItems
          .slice(0 + perPage * (page - 1), perPage * page)
          .map((item) => (
            <SearchItem item={item} key={item.id} onItemClick={onItemClick} />
          ))}
      {currentTab !== 0 &&
        categories[currentTab - 1].items
          .slice(0 + perPage * (page - 1), perPage * page)
          .map((item) => (
            <SearchItem item={item} key={item.id} onItemClick={onItemClick} />
          ))}
      <Pagination
        siblingCount={2}
        itemCount={paginationItemsCount}
        perPage={perPage}
        currentPage={page}
        onChangeCurrentPage={changePage}
        className="resultPage-pagination"
      />
    </div>
  );
};

export default observer(ResultPage);
