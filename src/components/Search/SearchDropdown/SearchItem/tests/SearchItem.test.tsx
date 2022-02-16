import React from 'react';
import { render } from '@testing-library/react';

import SearchItem from '../SearchItem';

const testId = 'testingSearchItem';

type SearchItemProps = React.ComponentProps<typeof SearchItem>;

const renderComponent = (props: SearchItemProps = {}) => render(
  <SearchItem
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SearchItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
