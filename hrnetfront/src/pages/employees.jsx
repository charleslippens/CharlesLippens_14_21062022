import Footer from "../components/footer.jsx";
import "../styling/employees.css";
import Table from "../components/tablemain.jsx";
import labels from "../datas/labels";

function EmployeeList() {
	return (
		<main>
			<Table labels={labels} />
			<div className="employees-link">
				<a href="/">Home</a>
			</div>
			<Footer />
		</main>
	);
}

export default EmployeeList;
