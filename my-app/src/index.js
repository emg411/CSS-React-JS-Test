import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App list={["Amarillo","Azul","Rojo","Verde"]}/>, document.getElementById('root'));
registerServiceWorker();
