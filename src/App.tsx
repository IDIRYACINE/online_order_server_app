import React from 'react';
import OrdersBoard from './pages/orders/OrdersBoard';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './pages/catalogue/Catalogue';
import Login from './pages/authentication/Login';
import CategoryEdit from './pages/category/CategoryEdit';
import CategoryCreator from './pages/category/CategoryCreation';
import Category from './pages/catalogue/Category';
import ProductCreator from './pages/product/ProductCreator';
import ProductEditor from './pages/product/ProductEditor';
import NavigationBar from './components/navbar/SideNavBar';
import OrderDetails from './pages/orders/OrderDetails';
import SettingsBoard from './pages/settings/SettingsBoard';
import PrivateRoute from './components/auth/PrivateRoutes';
import { Row,Col, Container} from 'react-bootstrap';
import './styles/App.scss';

function App() {
  return (
    <Row className="App ">
      
       <Col className="col-sm-1 nav-holder">
        <NavigationBar></NavigationBar>
       </Col>
            
      <Col className="app-body justify-content-center" >
        <Container className="container-sm">
      <Routes >
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
      </Container>
      
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
    </Col>
      
    </Row>
  
  );
}

export default App;
