import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";

import Home from "../pages/create-employees.jsx";
import Employees from "../pages/employees.jsx";
import Error from "../pages/error404.jsx";
import { useState } from "react";
import firebase from "./firebase.jsx";
import { FirebaseContext } from "../services/firebase_index.jsx";

/**
 * Router: browsing navigation for header, pages: home, employees, error
 * @returns {any}
 */
function Router() {
	const initialData = "";

	const [currentList, setCurrentList] = useState(initialData ? JSON.parse(initialData) : []);

	const addEmployee = (newOne) => {
		currentList.push(newOne);
		setCurrentList(currentList);
	};
	return (
		<>
			<BrowserRouter>
				<Header />
				<FirebaseContext.Provider value={{ firebase }}>
					<Routes>
						<Route index element={<Home setCurrentList={addEmployee} />} />
						<Route
							path="employees"
							element={<Employees updateNewEmployee={currentList} />}
						/>
						<Route path="*" element={<Error />} />
					</Routes>
				</FirebaseContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default Router;
