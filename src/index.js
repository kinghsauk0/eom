import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Singup from './pages/singup/Singup';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,RouterProvider , Route} from "react-router-dom"
import Login from './pages/login/Login';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Woman from './components/woman/Woman';
import Man from './components/man/Man';
import Kid from './components/kid/Kid';
import Electronics from './components/electronics/Electronics';
import Sports from './components/sports/Sports';
import Home from './pages/home/Home';
import Dashboard from './components/dashboard/Dashboard';


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='singup' element={<Singup/>}/>
      <Route path='login'  element={<Login/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='woman' element={<Woman/>}/>
        <Route path='man' element={<Man/>}/>
        <Route path='kid' element={<Kid/>}/>
        <Route path='electronic' element={<Electronics/>}/>
        <Route path='sports' element={<Sports/>}/>
      <Route path='contart' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
