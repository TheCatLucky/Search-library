import React from 'react';
import { render } from '@testing-library/react';

import SearchDropdown from '../SearchDropdown';
import SearchStore from '../../../../store';
import data from '../../../../../data';

type Props = {
  store: SearchStore;
};
const store = new SearchStore(data);

const renderComponent = (props: Props) => render(
  <SearchDropdown store={store} />,
);

describe('Компонент SearchDropdown', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
