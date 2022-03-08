import React from 'react';
import { render } from '@testing-library/react';

import data from '../../../../../../data';
import SearchStore from '../../../../../store';
import SearchCategory from '../SearchCategory';

const store = new SearchStore(data);

const renderComponent = () => render(<SearchCategory store={store.filteredData} limit={10} />);

describe('Компонент SearchCategory', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
