import React from 'react';
import { render } from '@testing-library/react';

import SearchCategory from '../SearchCategory';
import SearchStore from '../../../../../store';
import data from '../../../../../../data';

const testId = 'testingSearchCategory';

const store = new SearchStore(data);

const renderComponent = () => render(
  <SearchCategory store={store.filteredData} name="Источники данных" />,
);

describe('Компонент SearchCategory', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
