import React from 'react';
import { render } from '@testing-library/react';

import { ItemModel } from '../../../../../models';
import SearchItem from '../SearchItem';

const data: ItemModel = {
  id: '1',
  name: 'Актеры',
  createDate: new Date(2022, 1, 17),
  updateDate: new Date(2022, 1, 17),
  data: {
    links: 190,
    objects: 105,
  },
  keywords: ['Имя', 'Дата рождения', 'Фильмы с участием'],
};
const renderComponent = () => render(<SearchItem store={data} />);

describe('Компонент SearchItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
