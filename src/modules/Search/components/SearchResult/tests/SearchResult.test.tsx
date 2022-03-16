import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchStore from '../../../store';
import SearchResult from '../SearchResult';

const data = [
  {
    id: 1,
    title: 'Классы',
    logo: 'b',
    items: [
      {
        id: 101,
        name: 'Кинопоиск',
        created: new Date(2022, 1, 17),
        updated: new Date(2022, 1, 17),
        frequency: 0,
        keywords: ['Фильмы', 'Актеры', 'Сценаристы', 'Сериалы'],
        data: [
          {
            name: 'Связанные классы',
            value: 1338,
          },
        ],
      },
    ],
  },
];
const store = new SearchStore(data);

const component = (
  <SearchResult
    categories={store.items}
    onItemClick={() => {}}
    setShowDropdown={() => {}}
  />
);

describe('Компонент SearchResult', () => {
  it('отображается без ошибок', () => {
    expect(() => render(component)).not.toThrow();
  });

  it('отображает названия заголовков', () => {
    render(component);
    expect(screen.getByText(data[0].title)).toBeInTheDocument();
  });
});
