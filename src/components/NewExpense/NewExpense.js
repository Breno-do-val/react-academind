import React from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
  const handleAddNewExpense = (expense) => {
    onAddNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={handleAddNewExpense} />
    </div>
  );
};

export default NewExpense;
