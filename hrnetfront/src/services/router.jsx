import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";

import React, { Suspense, lazy, useState } from "react";

const Home = lazy(() => import("../pages/create-employees.jsx"));
const Employees = lazy(() => import("../pages/employees.jsx"));
const Error = lazy(() => import("../pages/error404.jsx"));

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
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route index element={<Home setCurrentList={addEmployee} />} />
						<Route
							path="employees"
							element={<Employees updateNewEmployee={currentList} />}
						/>
						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</>
	);
}

export default Router;
