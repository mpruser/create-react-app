import React from 'react';
import ReactDOM from 'react-dom';

import App1 from '@/App1';
import App2 from '@/App2';

ReactDOM.render((
  <>
    <App1 text="Hello World Tsx" />
    <App2 text="Hello World Jsx" />
  </>
), document.getElementById('root'));
