import React from 'react';
import { render } from '@testing-library/react';

import SearchItem from '../SearchItem';

const testId = 'testingSearchItem';

const data = {
  id: 1,
  name: 'Актеры',
  links: 190,
  objects: 105,
  created: new Date(2022, 1, 17),
  lastUpdate: new Date(2022, 1, 17),
  tags: ['Имя', 'Дата рождения', 'Фильмы с участием'],
};
const renderComponent = () => render(<SearchItem data-testid={testId} data={data} />);

describe('Компонент SearchItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
