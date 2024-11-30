import React from "react";
import { useExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
	const { state } = useExpenseContext();
	const { expenses } = state;

	return (
		<div className="expense-list">
			<ul>
				{expenses.map((expense, index) => (
					<li key={index}>
						<p>Description: {expense.description}</p>
						<p>Amount: ₹{expense.amount}</p>
						{expense.image && (
							<img src={expense.image} alt="Expense" width="200" />
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ExpenseList;
