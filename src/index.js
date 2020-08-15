import React from 'react';
import ReactDOM from 'react-dom';
import { NoStackProvider } from '@nostack/no-stack';

import TagManager from 'react-gtm-module';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PLATFORM_ID } from './config';
import App from './App';
import * as serviceWorker from './serviceWorker';

import client from './client';

import allReducers from './reducers';
import { Provider as AuthContext } from './custom/context/AuthContext';
import store from './redux/store';

const tagManagerArgs = {
  gtmId: 'GTM-TS3Q48S',
  js: new Date(),
};

// const store = createStore(
//   allReducers,
//   window.__redux_devtools_extension__ && window.__redux_devtools_extension__()
// );

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Provider store={store}>
    <AuthContext>
      <NoStackProvider client={client} platformId={PLATFORM_ID}>
        <App />
      </NoStackProvider>
    </AuthContext>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
