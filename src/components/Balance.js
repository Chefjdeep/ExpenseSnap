import React from "react";
import { useExpenseContext } from "../context/ExpenseContext";


function Balance() {
  const { state } = useExpenseContext();
  const { balance } = state;

  return (
    <div className="balance">
      <h2>Remaining Balance: ₹{balance}</h2>
    </div>
  );
}

export default Balance;
