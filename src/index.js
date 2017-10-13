import React, {Component} from 'react';
import {render} from 'react-dom';
import BasicExample from './routes';
import {Provider} from 'react-redux';
import store from 'stores/Store';

render(
  <Provider store={store}>
    {BasicExample()}
  </Provider>
, document.getElementById('content'));