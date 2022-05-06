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
import SettingsBoard from './Ui/pages/settings/SettingsBoard';
import PrivateRoute from './Ui/components/auth/PrivateRoutes';

function App() {
  return (
    <div className="App">

      <div className="App-header">
      <NavigationBar></NavigationBar>
      </div>
      
      <div className='App-body'>
      <Routes>
        <Route path ="/Login" element ={<Login />}/>
        <Route path="/Orders" element={<PrivateRoute><OrdersBoard/></PrivateRoute>} />
        <Route path="/Catalogue" element={<PrivateRoute><Catalogue/></PrivateRoute>} />
        <Route path="/Category/:categoryId" element={<PrivateRoute><Category/></PrivateRoute>} />

        <Route path="/EditCategory/:categoryId" element={<PrivateRoute><CategoryEdit/></PrivateRoute>}/>

        <Route path="/CreateCategory" element={<PrivateRoute><CategoryCreator/></PrivateRoute>}/>
        <Route path="/CreateProduct/:categoryId" element={<PrivateRoute><ProductCreator/></PrivateRoute>}/>

        <Route path="/EditProduct/:categoryId/:productId" element={<PrivateRoute><ProductEditor/></PrivateRoute>}/>
        <Route path="/Settings" element={<PrivateRoute><SettingsBoard/></PrivateRoute>} />
        <Route path="/OrderDetails/:orderId" element={<PrivateRoute><OrderDetails/></PrivateRoute>}/>
        

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
