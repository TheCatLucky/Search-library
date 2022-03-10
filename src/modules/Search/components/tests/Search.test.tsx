import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../Search';
import data from '../../../../data';
import SearchStore from '../../store';

const store = new SearchStore(data);
const search = <Search store={store} limit={10} />;

describe('Компонент Search', () => {
  it('отображается без ошибок', () => {
    render(search);
    expect(screen.getByPlaceholderText('Поиск...')).toBeInTheDocument();
  });
});
