import React from "react";
import "../styling/tablemain.css";

export default function Table({ labels, handleSort }) {
	return (
		<table className="table_main">
			<thead>
				<tr>
					{labels.map((label) => (
						<th>
							<div>
								<span>{label.text}</span>
							</div>
						</th>
					))}
				</tr>
			</thead>
		</table>
	);
}
