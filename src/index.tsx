import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@/store';

ReactDOM.render((
  <Provider store={store()}>
    <React.StrictMode>
      <h1>Hello World</h1>
    </React.StrictMode>
  </Provider>
), document.getElementById('root'));
