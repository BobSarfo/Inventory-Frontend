import React from 'react';
import SalesList from './modules/sales/components/SalesList';
import Header from './_shared/Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SalesList/>
    </div>
  );
}

export default App;
