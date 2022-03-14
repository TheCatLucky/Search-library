import React from 'react';
import { render, screen } from '@testing-library/react';

import { ItemModel } from '../../../models';
import SearchItem from '../SearchItem';

const data: ItemModel = {
  id: 101,
  name: 'Кинопоиск',
  created: new Date(2022, 1, 17),
  updated: new Date(2022, 1, 17),
  keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
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
};
const component = <SearchItem item={data} />;
describe('Компонент SearchItem', () => {
  it('отображается без ошибок', () => {
    expect(() => render(component)).not.toThrow();
  });
  it('отображает данные сущности', () => {
    render(<SearchItem item={data} />);
    expect(screen.getByText('Кинопоиск')).toBeInTheDocument();
    expect(screen.getByText('Связанные классы:')).toBeInTheDocument();
    expect(screen.getAllByText(1338)[0]).toBeInTheDocument();
  });
});
