import React from "react";
import "../styling/modal.css";

function Modal(element) {
	return (
		<div className="Theme">
			<div className="Message">
				<p>{element.text}</p>
				<button className="Button" onClick={element.close}>
					X
				</button>
			</div>
		</div>
	);
}
export default Modal;
