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
  term: string;
};

const SearchDropdown: React.FC<Props> = ({ filteredData, term }) => {
  const dataCalc = toJS(filteredData);
  if (dataCalc === null) {
    return <p>По вашему запросу ничего не найдено</p>;
  }
  /*  const resul = Array.of(...Object.values(dataCalc.classes)).filter((item) =>
    item.name.toLowerCase().includes(term.toLowerCase()),
  );

  console.log(resul); */

  const resultClasses = Array.of(...Object.values(dataCalc.classes)).filter(
    (item) => item.name.toLowerCase().includes(term.toLowerCase()),
  );
  const resultDataSources = Array.of(
    ...Object.values(dataCalc.dataSources),
  ).filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
  const resultObjects = Array.of(...Object.values(dataCalc.objects)).filter(
    (item) => item.name.toLowerCase().includes(term.toLowerCase()),
  );

  const finalClasses = _.flatMapDeep(resultClasses);
  const finalDataSources = _.flatMapDeep(resultDataSources);
  const finalObjects = _.flatMapDeep(resultObjects);

  return (
    <div className={classes.component}>
      <div className={classes.result}>
        {!!finalClasses.length && (
          <p>
            <SearchCategory data={finalClasses} name="Классы" />
          </p>
        )}
        {!!finalObjects.length && (
          <p>
            <SearchCategory data={finalObjects} name="Объекты" />
          </p>
        )}
        {!!finalDataSources.length && (
          <p>
            <SearchCategory data={finalDataSources} name="Источники данных" />
          </p>
        )}
      </div>
      <div className={classes.showAll}>
        <Button type="primary">Показать все результаты</Button>
      </div>
    </div>
  );
};

export default observer(SearchDropdown);
