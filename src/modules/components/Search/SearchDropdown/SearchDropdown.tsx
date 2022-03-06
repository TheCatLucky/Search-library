import React from 'react';
import Button from '@ff/ui-kit/lib/Button';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import classes from './SearchDropdown.module.scss';
import { Data } from '../tests/data';
import SearchCategory from './SearchCategory';
import SearchStore from '../../../store';

type Props = {
  store: SearchStore;
};

const SearchDropdown: React.FC<Props> = (props) => {
  const { store } = props;
  console.log(toJS(store));
  if (store.filteredData.length === 0) {
    return (
      <div className={classes.component}>
        <p>По вашему запросу ничего не найдено</p>
      </div>
    );
  }
  /*  const resul = Array.of(...Object.values(dataCalc.classes)).filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  console.log(resul); */

  /*  const resultClasses = Array.of(...Object.values(dataCalc.classes)).filter(
    (item) => item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const resultDataSources = Array.of(
    ...Object.values(dataCalc.dataSources)
  ).filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const resultObjects = Array.of(...Object.values(dataCalc.objects)).filter(
    (item) => item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const finalClasses = _.flatMapDeep(resultClasses);
  const finalDataSources = _.flatMapDeep(resultDataSources);
  const finalObjects = _.flatMapDeep(resultObjects); */

  return (
    <div className={classes.component}>
      {/* <div className={classes.result}>
        {!!finalClasses.length && (
          <div>
            <SearchCategory data={finalClasses} name="Классы" />
          </div>
        )}
        {!!finalObjects.length && (
          <div>
            <SearchCategory data={finalObjects} name="Объекты" />
          </div>
        )}
        {!!finalDataSources.length && (
          <div>
            <SearchCategory data={finalDataSources} name="Источники данных" />
          </div>
        )}
      </div> */}
      <div>
        <SearchCategory store={store.filteredData} name="Название" />
      </div>
      <div className={classes.showAll}>
        <Button type="primary">Показать все результаты</Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
