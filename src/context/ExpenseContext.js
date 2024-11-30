import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  budget: 0,
  expenses: [],
  balance: 5000,
};


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


const ExpenseContext = createContext();


export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => useContext(ExpenseContext);
