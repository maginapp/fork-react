import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HookApp from './HookApp';
import Simple from './Simple';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <HookApp />
   {/* <Simple /> */}
   <div key={'hook-sib-1'}><p>123</p>789</div>
   <p  key={'hook-sib-2'}>456</p>
   </>
   // <App />
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
