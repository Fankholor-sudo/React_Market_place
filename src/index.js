import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/Deshboard/LandingPage'

// ReactDOM.render(
//   <LandingPage/>,
//   document.getElementById('root')
// );
ReactDOM.render( 
   <React.StrictMode>
     <BrowserRouter> 
       <App />
     </BrowserRouter>
   </React.StrictMode>,
  document.getElementById('root')
);
