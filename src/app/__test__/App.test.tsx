import React from 'react';
import { render, screen } from '@testing-library/react';

import SalesList from '../modules/sales/components/SalesList';
import Header from '../_shared/Layout/Header';



test('check table', (() => { 
  render(<Header />);
  const linkElement = screen.getByText(/sales/i);
  expect(linkElement).toBeInTheDocument();
 }));