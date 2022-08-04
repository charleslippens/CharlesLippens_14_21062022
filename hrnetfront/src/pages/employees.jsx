import Footer from "../components/footer.jsx";
import "../styling/employees.css";
import labels from "../datas/labels.jsx";
import TableTest from "../components/table.jsx";

function EmployeeList() {
	const employees = JSON.parse(localStorage.getItem("employees")) || [];
	console.log(employees);

	return (
		<div className="employees">
			<TableTest labels={labels} data={employees} />
			<div className="employees-link">
				<a href="/">Home</a>
			</div>
			<Footer />
		</div>
	);
}

export default EmployeeList;
