import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import '@ff/ui-kit/lib/styles/fns.theme.css';
import App from './components/App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
