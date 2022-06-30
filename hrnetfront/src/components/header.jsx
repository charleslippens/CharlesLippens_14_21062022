import { Link } from "react-router-dom";

import "../styling/header.css";
import logo from "../assets/logo_hrnet.png";

function Header() {
	return (
		<div className="header">
			<div className="header-img">
				<Link to="/">
					<img className="logo" src={logo} alt="WealthHealth" />
				</Link>
			</div>
			<h1>
				<span className="wealth-name">WealthHealth </span> RH
			</h1>
		</div>
	);
}
export default Header;
