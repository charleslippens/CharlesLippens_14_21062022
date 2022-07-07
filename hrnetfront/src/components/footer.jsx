import "../styling/footer.css";
import logo from "../assets/logo_svg.png";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-m">
				<p className="footer-copy">Copyright 2022 Wealth Health</p>{" "}
				<img className="footer-logo" src={logo} alt="logo" />
			</div>
		</footer>
	);
}

export default Footer;
