import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import DatePicker from 'antd/lib/date-picker'
import 'antd/dist/antd.css';

import './index.css'

const store = createStore(commentsReducer)

// ReactDOM.render(
//   <Provider store={store}>
//     <CommentApp />
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <DatePicker >
  </DatePicker>,
  document.getElementById('root')
);