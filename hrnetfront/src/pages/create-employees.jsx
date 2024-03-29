import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import "../styling/create-employees.css";
import Form from "../components/form.jsx";

/**
 * Create employees page: header, button, form, footer
 * @returns {any}
 */
function Home(props) {
	const addEmployee = props.setCurrentList;

	return (
		<div className="home">
			<div className="home-form">
				<div className="home-header">
					<div className="home-name">HRNet</div>
					<div className="home-link">
						<Link to="/employees">View current employees</Link>
					</div>
				</div>
			</div>
			<Form setCurrentList={addEmployee} />
			<Footer />
		</div>
	);
}
export default Home;
