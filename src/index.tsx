import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import * as stores from './stores';
import { configure } from 'mobx';
configure({
  enforceActions: 'observed'
});

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
