import React from 'react';
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

const App = () => {
  return (<div>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element ={<Home/>}/>
      <Route exact path="/Product" element ={<Product/>}/>
      <Route exact path="/ProductList" element ={<ProductList/>}/>
      
      </Routes>
      </BrowserRouter>
  </div>);

};

export default App;