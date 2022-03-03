import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../Search';
import data from '../../../data';

const testId = 'testingSearch';

const search = <Search data-testid={testId} data={data} />;

describe('Компонент Search', () => {
  it('отображается без ошибок', () => {
    render(search);
    expect(screen.getByPlaceholderText('search...')).toBeInTheDocument();
  });
});
