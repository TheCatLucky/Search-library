import React from 'react';
import { render } from '@testing-library/react';

import ExtendedSearch from '../ExtendedSearch';

const testId = 'testingExtendedSearch';

type ExtendedSearchProps = React.ComponentProps<typeof ExtendedSearch>;

const renderComponent = (props: ExtendedSearchProps = {}) => render(
  <ExtendedSearch
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ExtendedSearch', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
