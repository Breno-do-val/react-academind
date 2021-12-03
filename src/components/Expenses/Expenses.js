import React from 'react';

import Card from '../UI/Card/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem/ExpenseItem';

import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filtered, setFiltered] = React.useState('2020');

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={setFiltered}
        selected={filtered}
      />
      {expenses
        .filter((item) => item.date.includes(filtered))
        .map((filtered) => {
          return (
            <ExpenseItem
              key={filtered.key}
              amount={filtered.amount}
              date={filtered.date}
              title={filtered.title}
              filter={filtered}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
