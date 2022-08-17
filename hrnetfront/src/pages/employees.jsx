import Footer from "../components/footer.jsx";
import "../styling/employees.css";
import labels from "../datas/labels.jsx";
import TableMain from "../components/tablemain.jsx";

/**
 * Employees page: header, TableMain, footer
 * @returns {any}
 */
function EmployeeList() {
	const employees = JSON.parse(localStorage.getItem("employees")) || [];
	console.log(employees);

	return (
		<div className="employees">
			<TableMain labels={labels} data={employees} />
			<div className="employees-link">
				<a href="/">Home</a>
			</div>
			<Footer />
		</div>
	);
}

export default EmployeeList;
