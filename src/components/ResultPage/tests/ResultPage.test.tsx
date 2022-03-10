import React from 'react';
import { render } from '@testing-library/react';

import ResultPage from '../ResultPage';

const testId = 'testingResultPage';

type ResultPageProps = React.ComponentProps<typeof ResultPage>;

const renderComponent = (props: ResultPageProps = {}) => render(
  <ResultPage
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ResultPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
