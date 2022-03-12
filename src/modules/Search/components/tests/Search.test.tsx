import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../Search';
import data from '../../../../data';
import SearchStore from '../../store';
import userEvent from '@testing-library/user-event';

const store = new SearchStore(data);
const search = <Search store={store} limit={10} />;

describe('Компонент Search', () => {
  it('отображается без ошибок', () => {
    render(search);
    expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
  });
  it('работает поиск', () => {
    render(search);
    const userScreen = screen.getByPlaceholderText('Поиск...');
    userEvent.type(userScreen, 'и');
    expect(screen.getByText('Википедия')).toBeInTheDocument();
    userEvent.type(userScreen, 'Z');
    expect(
      screen.getByText('По вашему запросу ничего не найдено')
    ).toBeInTheDocument();
  });
});
