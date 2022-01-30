import React from 'react';
import './styles/App.css';
import OrdersList from './pages/orders/OrdersList';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './pages/catalogue/Catalogue';
import Login from './pages/authentication/Login';
import CategoryEdit from './pages/category/CategoryEdit';
import CategoryCreator from './pages/category/CategoryCreation';
import Category from './pages/catalogue/Category';
import ProductCreator from './pages/product/ProductCreator';
import ProductEditor from './pages/product/ProductEditor';
import NavigationBar from './components/navbar/SideNavBar';

function App() {
  return (
    <div className="App">

      <div className="App-header">
      <NavigationBar></NavigationBar>
      </div>

      <div className='App-body'>
      <Routes>
        <Route path ="/Login" element ={<Login />}></Route>
        <Route path="/Orders" element={<OrdersList/>} />
        <Route path="/Catalogue" element={<Catalogue/>} />
        <Route path="/Category" element={<Category/>} />
        <Route path="/EditCategory" element={<CategoryEdit/>}/>
        <Route path="/CreateCategory" element={<CategoryCreator/>}/>
        <Route path="/CreateProduct" element={<ProductCreator/>}/>
        <Route path="/EditProduct" element={<ProductEditor/>}/>

      </Routes>
      </div>

      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      
    </div>
  );
}

export default App;
