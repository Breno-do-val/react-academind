import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ list }) => {

	if (list.length === 0) {
		return <h2 className='expenses-list__fallback'>No data to be displayed</h2>
	}

	return (
		<ul className='expenses-list'>
			{list.map((filtered) => {
				return (
					<ExpenseItem
							key={filtered.id}
							amount={filtered.amount}
							date={filtered.date}
							title={filtered.title}
							filter={filtered}
					/>
				);
			})}
		</ul>
	);
};

export default ExpensesList;
