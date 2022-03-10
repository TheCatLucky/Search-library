import React from 'react';
import { render } from '@testing-library/react';

import data from '../../../../../../data';
import SearchStore from '../../../../store';
import SearchResult from '../SearchResult';

const store = new SearchStore(data);

const renderComponent = () =>
  render(<SearchResult categories={store.dropdown}  />);

describe('Компонент SearchResult', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
