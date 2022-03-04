import React from 'react';
import { render } from '@testing-library/react';

import SearchDropdown from '../SearchDropdown';
import { Data } from '../../../../models/data';

const testId = 'testingSearchDropdown';

type Props = {
  filteredData: Data | null;
  term: string;
};

const renderComponent = (props: Props) => render(<SearchDropdown data-testid={testId} filteredData={null} term="a" />);

describe('Компонент SearchDropdown', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
