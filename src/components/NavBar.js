import { NavLink } from "react-router-dom";
import { generatePdf } from "./generatePdf";
import { useExpenseContext } from "../context/ExpenseContext";
import { clearLocalStorage } from "./LocalStorage";

const NavBar = () => {
	const { state } = useExpenseContext();
	const { expenses } = state;

	const handleGeneratePdf = () => {
		generatePdf(expenses);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<p className="navbar-brand">ExpenseSnap</p>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<NavLink className="nav-link" to="/ExpenseSnap" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/ExpenseSnap/expenses" activeClassName="active">
						Expenses
					</NavLink>
				</li>
			</ul>
			<button
				onClick={() => {
					clearLocalStorage(); 
					window.location.reload();
				}}
			>
				Clear All Data
			</button>
			<button onClick={handleGeneratePdf}>Export to PDF</button>
			{/* Search Form */}
			<form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</nav>
	);
};

export default NavBar;
