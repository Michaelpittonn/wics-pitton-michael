import React from 'react';

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const imponibile = totalIncome + totalExpenses;

  return (
    <div className="summary">
      <h3>Imponibile: {imponibile.toFixed(2)} €</h3>
      <div>Entrate: {totalIncome.toFixed(2)} €</div>
      <div>Uscite: {Math.abs(totalExpenses).toFixed(2)} €</div>
    </div>
  );
};

export default Summary;
