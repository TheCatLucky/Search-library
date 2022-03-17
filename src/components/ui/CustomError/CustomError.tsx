import React from 'react';
import { Title } from '@ff/ui-kit/lib/Typography';
import { Link } from 'react-router-dom';

import classes from './CustomError.module.scss';

const CustomError: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.error}>
        <Link to="/">Назад</Link>
        <Title level={1} className={classes.message}>
          Страница не найдена!
        </Title>
      </div>
    </div>
  );
};

export default CustomError;
