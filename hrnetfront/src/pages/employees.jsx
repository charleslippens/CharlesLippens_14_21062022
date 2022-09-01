import Footer from "../components/footer.jsx";
import "../styling/employees.css";
import labels from "../datas/labels.jsx";
import TableMain from "../components/tablemain.jsx";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../services/firebase_index.jsx";
import React, { useContext, useState, useEffect } from "react";

/**
 * Employees page: header, TableMain, footer
 * @returns {any}
 */
function EmployeeList(props) {
	const { firebase } = useContext(FirebaseContext);
	const [employees, setEmployees] = useState([]);

	function processSnapshot(snapshot) {
		const employeesList = snapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});
		setEmployees(employeesList);
	}

	useEffect(() => {
		const getEmployees = () => {
			firebase.db.collection("employees").onSnapshot(processSnapshot);
		};
		getEmployees();
	}, []);
	const updateNewEmployee = props.updateNewEmployee;
	//console.log(updateNewEmployee);
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
