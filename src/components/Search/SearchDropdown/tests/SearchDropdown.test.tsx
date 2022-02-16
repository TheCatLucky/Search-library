import React from 'react';
import { render } from '@testing-library/react';

import SearchDropdown from '../SearchDropdown';

const testId = 'testingSearchDropdown';

type SearchDropdownProps = React.ComponentProps<typeof SearchDropdown>;

const renderComponent = (props: SearchDropdownProps = {}) => render(
  <SearchDropdown
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SearchDropdown', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
