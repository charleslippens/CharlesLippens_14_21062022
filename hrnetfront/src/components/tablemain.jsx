import TableData from "./tablesub.jsx";
import Search from "./search.jsx";
import React, { useState } from "react";
import "../styling/search.css";

function TableMain({ data, labels }) {
	const initState = data;
	const [isSearch, setIsSearch] = useState(false);
	const [dataSort, setdataSort] = useState(initState);

	return (
		<div className="Tab">
			<div className="table-search">
				<Search data={data} DisplayedData={setdataSort} IsSearch={setIsSearch} />
			</div>
			<TableData labels={labels} data={dataSort} dataSort={dataSort} />
		</div>
	);
}
export default TableMain;
