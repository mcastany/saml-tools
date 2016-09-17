import CodeMirrorElement from './components/code_mirror.jsx'
import TextAreaElement from './components/text_area.jsx'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();
const container = document.getElementById('container');

render(
  <Provider store={store}>
    <div className="row">
      <div className="col-md-6">
        <h2 className='title'>Encoded</h2>
        <TextAreaElement></TextAreaElement>
      </div>
      <div className="col-md-6">
        <h2 className='title'>Decoded</h2>
        <CodeMirrorElement value="<xml></xml>"></CodeMirrorElement>          
      </div>
    </div>
  </Provider>, 
  container );