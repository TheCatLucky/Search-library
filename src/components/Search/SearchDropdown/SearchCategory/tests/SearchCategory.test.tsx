import React from 'react';
import { render } from '@testing-library/react';

import SearchCategory from '../SearchCategory';

const testId = 'testingSearchCategory';

type SearchCategoryProps = React.ComponentProps<typeof SearchCategory>;

const renderComponent = (props: SearchCategoryProps = {}) => render(
  <SearchCategory
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SearchCategory', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
