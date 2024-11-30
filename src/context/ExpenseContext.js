import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  budget: 0,
  expenses: [],
  balance: 5000,
};

// Reducer function to handle different actions
const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
        balance: action.payload,
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        balance: state.balance - action.payload.amount,
      };
    default:
      return state;
  }
};

// Create context
const ExpenseContext = createContext();

// ExpenseProvider to wrap your app and provide global state
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook to access ExpenseContext
export const useExpenseContext = () => useContext(ExpenseContext);