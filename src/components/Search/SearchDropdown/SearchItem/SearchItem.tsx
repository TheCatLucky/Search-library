import React from 'react';

import { Class, DataSource, DataObject } from '../../../../models/data';
import { dateConversion } from '../../../../utils';
import classes from './SearchItem.module.scss';

type Props = {
  data: Class | DataSource | DataObject;
};

const SearchItem: React.FC<Props> = ({ data }) => {
  const createDate = dateConversion(data.created);
  const updateDate = dateConversion(data.lastUpdate);
  console.log(typeof data);
  return (
    <div className={classes.component}>
      <div className={classes.mainInfo}>
        <div className={classes.itemName}>{data.name}</div>
        <div className={classes.shortInfo}>
          <p>
            Атрибуты: <span>{data.tags.length}</span>
          </p>
          {data.linkedObjects && (
            <p>
              Связанные Объекты: <span>{data.linkedObjects}</span>
            </p>
          )}
          {data.objects && (
            <p>
              Объекты: <span>{data.objects}</span>
            </p>
          )}
          {data.objects && (
            <p>
              Связи: <span>{data.objects}</span>
            </p>
          )}
          {data.linkedDataSources && (
            <p>
              Связанные источники данных: <span>{data.linkedDataSources}</span>
            </p>
          )}
          {data.linkedClasses && (
            <p>
              Связанные классы: <span>{data.linkedClasses}</span>
            </p>
          )}
        </div>
      </div>

      <div className={classes.date}>
        Дата создания: <span>{createDate}</span>
      </div>
      <div className={classes.date}>
        Последнее исправление: <span>{updateDate}</span>
      </div>
    </div>
  );
};
export default SearchItem;
