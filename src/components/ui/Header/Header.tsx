import React from 'react';
import Icon from '@ff/ui-kit/lib/Icon';

import classes from './Header.module.scss';
import logo from '../../../assets/Smal.svg';
import activity from '../../../assets/Activity.svg';
import structure from '../../../assets/Structure.svg';
import object from '../../../assets/Object.svg';
import folderStar from '../../../assets/FolderStar.svg';
import notification from '../../../assets/Notification.svg';
import { ItemModel, Search, SearchStore } from '../../../modules/search';

type Props = {
  store: SearchStore;
  showResultPage: React.Dispatch<React.SetStateAction<boolean>>;
  onItemClick: (item: ItemModel) => void;
};

const Header: React.FC<Props> = (props) => {
  const { store, onItemClick, showResultPage } = props;

  return (
    <header className={classes.wrapper}>
      <div className={classes.name}>
        <img src={logo} alt="Лого хедера" />
        <span>Реестр систем</span>
      </div>
      <div className={classes.search}>
        <Search
          store={store}
          onItemClick={onItemClick}
          setShowResultPage={showResultPage}
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
  );
};

export default Header;
