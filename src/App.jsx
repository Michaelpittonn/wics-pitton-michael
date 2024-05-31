import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Summary from './Summary';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div className="container">
      <div className="section">
        <Header balance={calculateBalance()} />
      </div>
      <div className="section">
        <TransactionForm onAddTransaction={addTransaction} />
      </div>
      <div className="section">
        <Summary transactions={transactions} />
      </div>
      <div className="section">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
