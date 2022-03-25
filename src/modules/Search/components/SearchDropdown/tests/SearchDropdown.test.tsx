import React from 'react';
import { render, screen } from '@testing-library/react';

import data from '../../../../../data';
import SearchStore from '../../../store';
import SearchDropdown from '../SearchDropdown';

const store = new SearchStore(data);

const component = (
  <SearchDropdown
    store={store}
    setShowDropdown={() => {}}
    setShowResultPage={() => {}}
    onItemClick={() => {}}
  />
);

describe('Компонент SearchDropdown', () => {
  it('отображается без ошибок', () => {
    expect(() => render(component)).not.toThrow();
  });
  it('отображает названия заголовков', () => {
    render(component);
    expect(
      screen.getByText('По вашему запросу ничего не найдено'),
    ).toBeInTheDocument();
  });
});
