import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import data from '../../data';
import { SearchStore, ItemModel } from '../../modules/search';
import { Home, Item } from '../routes/';
import { CustomError, Header } from '../ui';
import classes from './App.module.scss';

const store = new SearchStore(data);

const App: React.FC = () => {
  const [showResultPage, setShowResultPage] = useState(false);
  const [current, setCurrent] = useState<null | ItemModel>(null);
  const navigate = useNavigate();
  const handleClick = (currentItem: ItemModel) => {
    const updatedArr = data.map((categoty) => {
      setCurrent(currentItem);

      const items = categoty.items.map((item) =>
        item.id === currentItem.id
          ? { ...item, frequency: item.frequency + 1 }
          : item
      );
      return {
        ...categoty,
        items,
      };
    });

    store.setItems(updatedArr);
    navigate(`/item/${currentItem.id}`);
  };

  return (
    <main className={classes.component}>
      <Header
        store={store}
        onItemClick={handleClick}
        showResultPage={setShowResultPage}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              store={store}
              onItemClick={handleClick}
              showResultPage={showResultPage}
            />
          }
        />
        <Route path="/item/:view" element={<Item item={current} />} />
        <Route path="*" element={<CustomError />} />
      </Routes>
    </main>
  );
};
export default App;
