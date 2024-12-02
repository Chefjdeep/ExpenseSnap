import React from "react";
import { useExpenseContext } from "../context/ExpenseContext";
import { toWords } from "number-to-words";

function Balance() {
	const { state } = useExpenseContext();
	const { balance } = state;

	function convertToRupees(amount) {
		const words = toWords(amount);
		return `Rupees : ${words.charAt(0).toUpperCase() + words.slice(1)}`;
	}

	return (
		<div className="balance">
			<h2>Remaining Balance: ₹{balance}</h2>
			<h6>{convertToRupees(balance)}</h6>
		</div>
	);
}

export default Balance;
