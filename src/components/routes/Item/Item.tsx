import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '@ff/ui-kit/lib/Typography';

import { ItemModel } from '../../../modules/search';
import classes from './Item.module.scss';

type Props = {
  item: null | ItemModel;
};

const Item: React.FC<Props> = (props) => {
  const { item } = props;
  const created = item?.created.toLocaleDateString();
  const updated = item?.updated.toLocaleDateString();

  return (
    <div className={classes.wrapper}>
      <div className={classes.component}>
        <Link to="/">Назад</Link>
        <div className={classes.mainInfo}>
          <div className={classes.logo}>
            <img src={item?.logo} alt="Лого" />
          </div>
          <Title level={4} className={classes.itemName}>
            {item?.name}
          </Title>
        </div>
        <div className={classes.shortInfo}>
          {item?.data.map((field) => (
            <p key={field.name}>
              {field.name}:<span> {field.value}</span>
            </p>
          ))}
        </div>
        <div className={classes.date}>
          Дата создания:<span> {created}</span>
        </div>
        <div className={classes.date}>
          Последнее исправление:<span> {updated}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
