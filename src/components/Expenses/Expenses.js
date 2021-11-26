import React from 'react';

import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';

import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.key}
            amount={item.amount}
            date={item.date}
            title={item.title}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
