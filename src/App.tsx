import React from 'react';
import './Ui/styles/App.css';
import OrdersBoard from './Ui/pages/orders/OrdersBoard';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './Ui/pages/catalogue/Catalogue';
import Login from './Ui/pages/authentication/Login';
import CategoryEdit from './Ui/pages/category/CategoryEdit';
import CategoryCreator from './Ui/pages/category/CategoryCreation';
import Category from './Ui/pages/catalogue/Category';
import ProductCreator from './Ui/pages/product/ProductCreator';
import ProductEditor from './Ui/pages/product/ProductEditor';
import NavigationBar from './Ui/components/navbar/SideNavBar';
import OrderDetails from './Ui/pages/orders/OrderDetails';

function App() {
  return (
    <div className="App">

      <div className="App-header">
      <NavigationBar></NavigationBar>
      </div>

      <div className='App-body'>
      <Routes>
        <Route path ="/Login" element ={<Login />}></Route>
        <Route path="/Orders" element={<OrdersBoard/>} />
        <Route path="/Catalogue" element={<Catalogue/>} />
        <Route path="/Category/:categoryId" element={<Category/>} />

        <Route path="/EditCategory/:categoryId" element={<CategoryEdit/>}></Route>

        <Route path="/CreateCategory" element={<CategoryCreator/>}/>
        <Route path="/CreateProduct" element={<ProductCreator/>}/>

        <Route path="/EditProduct/:categoryId/:productId" element={<ProductEditor/>}></Route>

        <Route path="/OrderDetails/:orderId" element={<OrderDetails/>}></Route>

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
