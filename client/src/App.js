import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransactionn } from './components/AddTransactionn';

import { GlobalProvider } from './context/GlobalState';

function App() { 
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactionn />
      </div>
    </GlobalProvider>
  );
}

export default App;
