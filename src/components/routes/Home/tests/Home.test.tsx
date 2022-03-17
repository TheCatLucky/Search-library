import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

const testId = 'testingHome';

type HomeProps = React.ComponentProps<typeof Home>;

const renderComponent = (props: HomeProps = {}) => render(<Home data-testid={testId} {...props} />);

describe('Компонент Home', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
