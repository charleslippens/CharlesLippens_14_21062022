import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import "../styling/error.css";

function Error() {
	return (
		<div className="employees">
			<div className="error">
				<div className="error-link">
					<Link to="/">Home</Link>
				</div>
				<p>Error 404, page doesn't exist anymore !</p>
				<div className="error-link">
					<Link to="/employees">Current Employees</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Error;
