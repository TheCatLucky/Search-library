import React from 'react';
import Button from '@ff/ui-kit/lib/Button';
import _ from 'lodash';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import classes from './SearchDropdown.module.scss';
import { Data } from '../../../models/data';
import SearchCategory from './SearchCategory';

type Props = {
  filteredData: Data | null;
};

const SearchDropdown: React.FC<Props> = ({ filteredData }) => {
  const dataCalc = toJS(filteredData);
  if (dataCalc === null) {
    return <p>По вашему запросу ничего не найдено</p>;
  }

  const resultClasses = Array.of(...Object.values(dataCalc.classes)).map(
    (item) => item,
  );
  const finalClasses = _.flatMapDeep(resultClasses);
  const resultDataSources = Array.of(
    ...Object.values(dataCalc.dataSources),
  ).map((item) => item);
  const finalDataSources = _.flatMapDeep(resultDataSources);
  const resultObjects = Array.of(...Object.values(dataCalc.objects)).map(
    (item) => item,
  );
  const finalObjects = _.flatMapDeep(resultObjects);

  return (
    <div className={classes.component}>
      <div className={classes.result}>
        <p>
          <SearchCategory data={finalClasses} name="Классы" />
        </p>
        <p>
          <SearchCategory data={finalObjects} name="Объекты" />
        </p>
        <p>
          <SearchCategory data={finalDataSources} name="Источники данных" />
        </p>
      </div>
      <div className={classes.showAll}>
        <Button type="primary">Показать все результаты</Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
