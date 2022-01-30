import React from 'react';
import './styles/App.css';
import OrdersList from './ui/orders/OrdersList';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './ui/catalogue/Catalogue';
import Login from './ui/authentication/Login';
import CategoryEdit from './ui/category/CategoryEdit';
import CategoryCreator from './ui/category/CategoryCreation';
import Category from './ui/catalogue/Category';
import ProductCreator from './ui/product/ProductCreator';
import ProductEditor from './ui/product/ProductEditor';
import NavigationBar from './components/SideNav/SideNavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path ="/" element ={<Login />}></Route>
        <Route path="/Orders" element={<OrdersList/>} />
        <Route path="/Catalogue" element={<Catalogue/>} />
        <Route path="/Category" element={<Category/>} />
        <Route path="/EditCategory" element={<CategoryEdit/>}/>
        <Route path="/CreateCategory" element={<CategoryCreator/>}/>
        <Route path="/CreateProduct" element={<ProductCreator/>}/>
        <Route path="/EditProduct" element={<ProductEditor/>}/>



      </Routes>
      </header>
      
    </div>
  );
}

export default App;
