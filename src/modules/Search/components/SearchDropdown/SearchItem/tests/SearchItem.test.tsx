import React from 'react';
import { render } from '@testing-library/react';

import { ItemModel } from '../../../../models';
import SearchItem from '../SearchItem';

const data: ItemModel = {
  id: '1',
  name: 'Актеры',
  created: new Date(2022, 1, 17),
  updated: new Date(2022, 1, 17),
  data: [
    {
      name: 'Связанные классы',
      value: 1338,
    },
    {
      name: 'Связанные имена',
      value: 1338,
    },
  ],
  keywords: ['Имя', 'Дата рождения', 'Фильмы с участием'],
};
const logo = 'no logo';
const renderComponent = () =>
  render(<SearchItem itemStore={data} logo={logo} />);

describe('Компонент SearchItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
