import Footer from "../components/footer.jsx";
import "../styling/employees.css";
import labels from "../datas/labels.jsx";
import TableMain from "../components/tablemain.jsx";
import { Link } from "react-router-dom";

/**
 * Employees page: header, TableMain, footer
 * @returns {any}
 */
function EmployeeList(props) {
	//const employees = JSON.parse(localStorage.getItem("employees")) || [];
	//console.log(employees);
	const updateNewEmployee = props.updateNewEmployee;
	console.log(updateNewEmployee);
	return (
		<div className="employees">
			<TableMain labels={labels} data={updateNewEmployee} />
			<div className="employees-link">
				<Link to="/">Home</Link>
			</div>
			<Footer />
		</div>
	);
}

export default EmployeeList;
