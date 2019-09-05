import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import thunk from 'react-thunk';

import App from './containers/App';
// import reducers from './reducer';
import 'semantic-ui-css/semantic.min.css'
import './index.css';


// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider>
    <App />,
  // </Provider>,
  document.getElementById('root'));
