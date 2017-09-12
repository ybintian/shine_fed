import React, {Component} from 'react';
import {render} from 'react-dom';
import BasicExample from './routes';

render(
  <div>
    {BasicExample()}
  </div>
, document.getElementById('content'));