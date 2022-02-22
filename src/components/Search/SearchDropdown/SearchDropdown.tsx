import React from 'react';
import Button from '@ff/ui-kit/lib/Button';

import classes from './SearchDropdown.module.scss';

type Props = {};

const SearchDropdown: React.FC<Props> = (props) => (
  <div className={classes.component}>
    SearchDropdown
    <div className={classes.showAll}>
      <Button type="primary">Показать все результаты</Button>
    </div>
  </div>
);

export default SearchDropdown;
