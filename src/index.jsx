import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const el = document.getElementById('root');

//3) tell react to take control of that element
const root = ReactDOM.createRoot(el);
//4) create a component

//5) show the component on the screen 
root.render(
    <App />
);
  
 