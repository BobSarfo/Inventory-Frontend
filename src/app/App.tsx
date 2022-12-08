import React from 'react';
import { Card, Col, Row } from 'react-bootstrap-v5';
import AddSalesForm from './modules/sales/components/AddSalesForm';
import SalesList from './modules/sales/components/SalesList';
import Header from './_shared/Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Card>
        <Row>
          <Col xs={4}>
            <AddSalesForm />
          </Col>
          <Col xs={8}>
            <SalesList />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
