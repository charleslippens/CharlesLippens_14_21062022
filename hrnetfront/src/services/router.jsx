import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";

import Home from "../pages/create-employees.jsx";
import Employees from "../pages/employees.jsx";
import Error from "../pages/error404.jsx";

function Router() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="employees" element={<Employees />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default Router;
