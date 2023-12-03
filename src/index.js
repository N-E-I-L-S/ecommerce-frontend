import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Context_Functions/UserAuth';
import { ProductsProvider } from './Context_Functions/ProductsContext';
import { FilterProductsProvider } from './Context_Functions/FilterProductsContext';
import { CartProvider  } from './Context_Functions/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <ProductsProvider >
      <FilterProductsProvider>
        <CartProvider>
      <App />
        </CartProvider>
      </FilterProductsProvider>
    </ProductsProvider >
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
