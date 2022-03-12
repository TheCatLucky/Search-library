import React from 'react';
import { render } from '@testing-library/react';

import data from '../../../../../data';
import SearchStore from '../../../store';
import SearchDropdown from '../SearchDropdown';

const store = new SearchStore(data);

const component = <SearchDropdown store={store} />;

describe('Компонент SearchDropdown', () => {
  it('отображается без ошибок', () => {
    expect(() => render(component)).not.toThrow();
  });
});
