import React from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {

  const [ isEditing, setIsEditing ] = React.useState(false);

  const handleAddNewExpense = (expense) => {
    onAddNewExpense(expense);
  };

  const handleEditing = () => setIsEditing(true);

  const handleCancelForm = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onAddNewExpense={handleAddNewExpense} onCancel={handleCancelForm}/>}
    </div>
  );
};

export default NewExpense;
