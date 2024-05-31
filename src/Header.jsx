import React from 'react';

const Header = ({ balance }) => {
  return (
    <div className="header">
      <h2 className="header-title">Gestione Saldo delle Spese</h2>
      <h4>Saldo: {balance.toFixed(2)} €</h4>
    </div>
  );
};

export default Header;
