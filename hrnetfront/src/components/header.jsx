import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

import "../styling/header.css";

/**
 * Displaying all elements in header
 * @returns {any}
 */
function Header() {
	return (
		<div className="header">
			<div className="header-img">
				<Link to="/">
					<img className="logo" src={logo} alt="WealthHealth" />
				</Link>
			</div>
			<h1>
				<span className="wealth-name">Wealth Health HRNet</span>
				<br />
				Your dynamic App to manage HR
			</h1>
		</div>
	);
}
export default Header;
