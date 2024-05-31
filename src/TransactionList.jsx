import React from 'react';

const TransactionList = ({ transactions }) => {
  const sortedTransactions = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="transaction-list">
      <h3>Movimenti</h3>
      <ul>
        {sortedTransactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <div className="transaction-info">
              <span className={`transaction-amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                {transaction.amount < 0 ? '-' : ''}€{Math.abs(transaction.amount).toFixed(2)}
              </span>
              <span className="transaction-description">{transaction.description}</span>
            </div>
            <span className="transaction-date">{new Date(transaction.date).toLocaleDateString('it-IT')}</span>
          </li>
        ))}
      </ul>
      <button className="add-button">+</button>
    </div>
  );
};

export default TransactionList;

