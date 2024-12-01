import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseContext";
import NavBar from "./components/NavBar";
// import BudgetSection from "./components/BudgetSection";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Balance from "./components/Balance"; // Make sure this import is used
import "./App.css";

function App() {
	return (
		<ExpenseProvider>
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path="/ExpenseSnap" element={<Home />} />
						<Route path="/expenses" element={<Expenses />} />
					</Routes>
				</div>
			</Router>
		</ExpenseProvider>
	);
}

const Home = () => {
	return (
		<div>
			<Balance />
			{/* <BudgetSection /> */}
			<ExpenseForm />
		</div>
	);
};

const Expenses = () => {
	return (
		<div>
			<Balance />
			<h2 align="center">History</h2>
			<ExpenseList />
		</div>
	);
};

export default App;
