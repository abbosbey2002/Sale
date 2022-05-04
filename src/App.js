
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import  {Switch, Router, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Products from './component/products/Products';
import Product from './component/product/Product';

function App() {
  return (
    
   <>
   <Navbar/>
   <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/products' component={Products} />
     <Route exact path='/products/:id' component={Product} />
   </Switch>

   </>
  );
}


export default App;
