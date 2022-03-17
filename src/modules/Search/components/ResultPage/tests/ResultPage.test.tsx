import React from 'react';
import { render } from '@testing-library/react';

import ResultPage from '../ResultPage';
import data from '../../../../../data';
import SearchStore from '../../../store';

const store = new SearchStore(data);
const renderComponent = () => render(<ResultPage store={store} onItemClick={() => {}} />);

describe('Компонент ResultPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
