import React from 'react';

import classes from './Home.module.scss';
import { ItemModel, ResultPage, SearchStore } from '../../../modules/search';

type Props = {
  showResultPage: boolean;
  store: SearchStore;
  onItemClick: (item: ItemModel) => void;
};
const Home: React.FC<Props> = (props) => {
  const { showResultPage, store, onItemClick } = props;

  return (
    <div className={classes.wrapper}>
      {showResultPage && <ResultPage store={store} onItemClick={onItemClick} />}
    </div>
  );
};

export default Home;
