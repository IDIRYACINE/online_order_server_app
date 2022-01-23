import React from 'react';
import './styles/App.css';
import OrdersList from './ui/orders/OrdersList';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './ui/catalogue/Catalogue';
import Login from './ui/authentication/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Routes>
        <Route path ="/" element ={<Login />}></Route>
        <Route path="/Orders" element={<OrdersList/>} />
        <Route path="/Catalogue" element={<Catalogue/>} />
      </Routes>
      </header>
      
    </div>
  );
}

export default App;
