import React from 'react';
import { render } from '@testing-library/react';

import { ItemModel } from '../../../../models';
import SearchItem from '../SearchItem';

const data: ItemModel = {
  id: '1',
  name: 'Актеры',
  create: new Date(2022, 1, 17),
  update: new Date(2022, 1, 17),
  data: {
    links: 190,
    objects: 105,
  },
  keywords: ['Имя', 'Дата рождения', 'Фильмы с участием'],
};
const logo = 'no logo';
const renderComponent = () => render(<SearchItem itemStore={data} logo={logo} />);

describe('Компонент SearchItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
