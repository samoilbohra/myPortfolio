import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AlertTemplate from 'react-alert-template-basic'
import { positions , transitions , Provider as AlertProvider} from 'react-alert'
import { HashRouter } from 'react-router-dom';



const options ={
  timeout :5000,
  position : positions.BOTTOM_CENTER,
  transition : transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AlertProvider template={AlertTemplate} {...options} >
  <HashRouter>
    <App />
    </HashRouter>
    </AlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
