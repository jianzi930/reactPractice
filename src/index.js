import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './component/Index/App.jsx';
// import Header from './component/Index/Header.jsx';
import './public/css/init.pcss';
import './public/css/style.css';
import './public/css/workDesk.css';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('body')
);
 