import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import "../styling/home.css";
import { useState } from "react";
import Modal from "../components/modal.jsx";

//test modal
function Home() {
	const [openModal, setOpenModal] = useState(false);
	const CloseModal = () => setOpenModal(false);
	const OpenModal = () => setOpenModal(true);
	const Submit = (e) => {
		e.preventDefault();
		OpenModal();
	};
	return (
		<div className="home">
			<div className="home-form">
				<div className="home-header">
					<Link to="/employees">View current employees</Link>
				</div>
			</div>
			<div className="test-modal">
				<form onSubmit={Submit}>
					<button type="submit" className="sub">
						Click here: open Modal
					</button>
				</form>
				{openModal && <Modal close={CloseModal} text="Test modal" />}
			</div>
			<Footer />
		</div>
	);
}
export default Home;
