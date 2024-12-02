import React, { useState } from "react";
import { useExpenseContext } from "../context/ExpenseContext";
import addExpenseToSheet from "./GoogleSheet";


function ExpenseForm() {
  const { dispatch } = useExpenseContext(); // Using dispatch to update the global state
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(""); // For form validation error message

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!description || !amount) {
      setError("Please provide both description and amount.");
      return;
    }

    // Clear previous error messages
    setError("");

    // Create expense object
    const expense = {
      description,
      amount: parseFloat(amount),
      image,
    };

    // Dispatch action to add expense
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    addExpenseToSheet(expense);

    // Clear form after submission
    setDescription("");
    setAmount("");
    setImage(null);
  };



  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter expense description"
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter expense amount"
        />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} />
        {image && <img src={image} alt="Preview" style={{ width: "100px", marginTop: "10px" }} />}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
