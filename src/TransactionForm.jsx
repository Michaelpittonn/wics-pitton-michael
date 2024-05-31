import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
      type: parseFloat(amount) < 0 ? 'uscita' : 'entrata'
    };

    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Descrizione</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Inserisci descrizione..." 
        />
      </div>
      <div className="form-control">
        <label>Importo (€)</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Inserisci importo..." 
        />
      </div>
      <div className="form-control">
        <label>Data</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>
      <button type="submit" className="btn">Aggiungi Transazione</button>
    </form>
  );
};

export default TransactionForm;

