import React, { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext";

function BudgetSection() {
  const { dispatch } = useExpenseContext();
  const [budget, setBudget] = useState(0);

  const handleSetBudget = () => {
    dispatch({
      type: "SET_BUDGET",
      payload: budget,
    });
  };

  return (
    <div className="budget-section">
      <label>Set Alloted Amount: </label>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <button onClick={handleSetBudget}>Set Budget</button>
    </div>
  );
}

export default BudgetSection;
