import React from 'react';
import './ui/style/App.css';
import OrdersList from './ui/orders/OrdersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <OrdersList/>
      </header>
      
    </div>
  );
}

export default App;
