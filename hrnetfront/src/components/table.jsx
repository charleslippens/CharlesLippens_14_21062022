import React from "react";
import Table from "./tablemain.jsx";

function TableTest({ labels, data }) {
	return (
		<div className="MyTable">
			<Table labels={labels} data={data} />
		</div>
	);
}
export default TableTest;
