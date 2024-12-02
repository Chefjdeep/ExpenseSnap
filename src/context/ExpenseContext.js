import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
	saveToLocalStorage,
	loadFromLocalStorage,
} from "../components/LocalStorage";

const initialState = {
	budget: 0,
	expenses: [],
	balance: 100000,
};

// Load initial state from localStorage
const loadInitialState = () => {
	const loadedState = loadFromLocalStorage();
	if (loadedState) {
		return loadedState;
	}
	return initialState;
};

const expenseReducer = (state, action) => {
	switch (action.type) {
		case "SET_BUDGET":
			return {
				...state,
				budget: action.payload,
				balance: action.payload,
			};
		case "ADD_EXPENSE":
			return {
				...state,
				expenses: [...state.expenses, action.payload],
				balance: state.balance - action.payload.amount,
			};
		case "SET_EXPENSES":
			return {
				...state,
				expenses: action.payload,
			};
		default:
			return state;
	}
};

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
	const [state, dispatch] = useReducer(expenseReducer, loadInitialState());

	// Save state to localStorage whenever the state changes
	useEffect(() => {
		saveToLocalStorage(state);
	}, [state]);

	return (
		<ExpenseContext.Provider value={{ state, dispatch }}>
			{children}
		</ExpenseContext.Provider>
	);
};

export const useExpenseContext = () => useContext(ExpenseContext);
