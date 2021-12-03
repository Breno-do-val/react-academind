import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onAddNewExpense }) => {
  const [userInput, setUserInput] = React.useState({
    title: '',
    amount: '',
    date: '',
  });

  const handleTitleChange = (event) => {
    setUserInput((prev) => ({
      ...prev,
      title: event.target.value,
    }));
  };

  const handleAmountChange = (event) => {
    setUserInput((prev) => ({
      ...prev,
      amount: event.target.value,
    }));
  };

  const handleDateChange = (event) => {
    setUserInput((prev) => ({
      ...prev,
      date: new Date(event.target.value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    onAddNewExpense(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
