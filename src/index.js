import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FilterableProductTable } from './App';
import { ProductsComponent } from './components/Products'
import { App } from './components/CustomHooks'
import { List } from './components/demo'
import  { StateObject } from './components/Reducer'
import { Example} from './components/Reducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ProductsComponent /> */}
    {/* <App /> */}
    <StateObject />
    <Example />
    {/* <List /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
