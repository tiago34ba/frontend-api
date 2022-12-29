import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/services';  
import Solutions from './components/solutions';
import Price from './components/Price';
const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Header }  path="/header" />
           <Route component = { Footer }  path="/footer" />
           <Route component = { Services }  path="/services"  />
           <Route component = { Solutions }  path="/solutions" />
           <Route component = { Price }  path="/price" />
           <Route component = { Contact }  path="/contact" />
       </BrowserRouter>
   )
}

export default Routes;