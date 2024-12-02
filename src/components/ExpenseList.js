import React, { useEffect } from "react";
import { useExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
	const { state, dispatch } = useExpenseContext();
	const { expenses } = state;

	// Function to fetch data from Google Sheet using SheetDB
	// const readGoogleSheet = () => {
	//   fetch("https://sheetdb.io/api/v1/ux2pqa8mw3tmr")
	//     .then((response) => response.json())
	//     .then((data) => {
	//       console.log("Fetched expenses from Google Sheets:", data);
	//       // Update global state with fetched expenses
	//       dispatch({
	//         type: "SET_EXPENSES", // Assuming you have an action to set expenses
	//         payload: data,
	//       });
	//     })
	//     .catch((error) => {
	//       console.error("Error fetching expenses from Google Sheets:", error);
	//     });
	// };

	// // Fetch expenses when the component mounts
	// useEffect(() => {
	//   readGoogleSheet(); // Fetch data when the component mounts
	// });

	return (
		<div className="expense-list">
			<ul>
				{expenses.length === 0 ? (
					<p>No expenses to show.</p>
				) : (
					expenses.map((expense, index) => (
						<li key={index}>
							<p className="description">Description: {expense.description}</p>
							<p className="amount">Amount: ₹{expense.amount}</p>
							{expense.image ? (
								<img src={expense.image} alt="Expense" width="200" />
							) : (
								<p className="noimg">No image</p>
							)}
						</li>
					))
				)}
			</ul>
		</div>
	);
}

export default ExpenseList;
