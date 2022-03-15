import React, { useState } from 'react';
import Icon from '@ff/ui-kit/lib/Icon';

import data from '../../data';
import logo from '../../assets/Smal.svg';
import activity from '../../assets/Activity.svg';
import structure from '../../assets/Structure.svg';
import object from '../../assets/Object.svg';
import folderStar from '../../assets/FolderStar.svg';
import notification from '../../assets/Notification.svg';
import {
  ResultPage,
  Search,
  SearchStore,
  ItemModel,
} from '../../modules/search';
import classes from './App.module.scss';

const store = new SearchStore(data);

const App: React.FC = () => {
  const [showResultPage, setShowResultPage] = useState(false);

  // Как правильно менять frequency?
  const handleClick = (currentItem: ItemModel) => {
    store.items.forEach((category) =>
      category.items.forEach((item) => {
        if (item.id === currentItem.id) {
          item.frequency += 1;
        }
      })
    );
  };

  return (
    <main className={classes.component}>
      <header className={classes.header}>
        <div className={classes.name}>
          <img src={logo} alt="Лого хедера" />
          <span>Реестр систем</span>
        </div>
        <div className={classes.search}>
          <Search
            store={store}
            onItemClick={handleClick}
            showResultPage={setShowResultPage}
          />
        </div>
        <div className={classes.infoBar}>
          <div className={classes.navigation}>
            <div>
              <img src={structure} alt="Структура" />
              <span>Структура</span>
            </div>
            <div>
              <img src={object} alt="Объекты" />
              <span>Объекты</span>
            </div>
          </div>
          <div className={classes.notifications}>
            <img src={activity} alt="Активности" />
            <img src={folderStar} alt="Папка" />
            <img src={notification} alt="Уведомления" />
          </div>
          <div className={classes.user}>
            <Icon name="settings" />
            <Icon name="person" />
            <span>Кондратьев В.В.</span>
          </div>
        </div>
      </header>
      <div className={classes.content}>
        {showResultPage && (
          <ResultPage store={store} onItemClick={handleClick} />
        )}
      </div>
    </main>
  );
};
export default App;
