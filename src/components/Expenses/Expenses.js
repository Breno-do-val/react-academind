import React from 'react';

import Card from '../UI/Card/Card';
import ExpensesChart from './ExpensesChart/ExpensesChart';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';

import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filtered, setFiltered] = React.useState('2020');

  const filterChangeHandler = (selectedYear) =>
    setFiltered(selectedYear);

  const filteredList = expenses.filter(
    (expense) =>
      new Date(expense.date).getFullYear().toString() === filtered,
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filtered}
      />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList list={filteredList} />
    </Card>
  );
};

export default Expenses;
