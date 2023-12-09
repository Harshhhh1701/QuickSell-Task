import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import Reduxstore from './Reduxstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Reduxstore} >
      <App />
    </Provider>
);
