import React from 'react';
import { render } from '@testing-library/react';

import SearchDropdown from '../SearchDropdown';
import { Data } from '../../../../models/data';

const testId = 'testingSearchDropdown';

type Props = {
  filteredData: Data | null;
};

const renderComponent = (props: Props) => render(<SearchDropdown data-testid={testId} filteredData={null} />);

describe('Компонент SearchDropdown', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
