import TableData from "./tabledata.jsx";
import TableShowing from "./showing.jsx";
import Search from "./search.jsx";
import Entry from "./entries.jsx";
import Pagination from "./page.jsx";

import { useState } from "react";
import "../styling/search.css";
import PropTypes from "prop-types";
import { normalizeTxt } from "../services/utils.jsx";

/**
 * Creating main table with all elements and functionalities
 * @param {any} {data
 * @param {any} labels}
 * @returns {any}
 */
function TableMain({ data, labels }) {
	const [sortedCol, setSort] = useState({
		col: "",
		isDescending: true,
	});

	// Setsort by ascending or descending
	const Sort = (label) => {
		if (sortedCol.col === label) {
			setSort({
				...sortedCol,
				isDescending: !sortedCol.isDescending,
			});
		} else {
			setSort({
				col: label,
				isDescending: false,
			});
		}

		const sorted = sorting(label);
		setdataSort(sorted);
	};

	// Sorting columns by labels
	const sorting = (lbl) => {
		const sorted = dataSort.sort((a, b) => {
			const lb1 = normalizeTxt(a[lbl]);
			const lbl2 = normalizeTxt(b[lbl]);

			if (sortedCol.isDescending) {
				if (lb1 < lbl2) return -1;
				if (lb1 > lbl2) return 1;
			} else {
				if (lb1 < lbl2) return 1;
				if (lb1 > lbl2) return -1;
			}

			return 0;
		});

		return sorted;
	};
	const initState = data;

	//search and sort
	const [isSearch, setIsSearch] = useState(false);
	const [dataSort, setdataSort] = useState(initState);

	//showing/entries
	const [postPage, setPostPerPage] = useState(10);
	const [current, setCurrentPage] = useState(1);
	console.log(postPage);

	// min, max for normal and filtered
	const minimumRows = current === 1 ? 1 : (current - 1) * postPage + 1;
	const maximumRows = current * postPage < data.length ? current * postPage : data.length;
	const minShow = current === 1 ? (dataSort.length > 0 ? 1 : 0) : (current - 1) * postPage + 1;
	const maxShow = current * postPage < dataSort.length ? current * postPage : dataSort.length;

	//entries to display
	const EntryChange = (evt) => {
		setPostPerPage(parseInt(evt.target.value));
		setCurrentPage(1);
	};
	console.log(dataSort);

	console.log(EntryChange);
	return (
		<div className="Tab">
			<div className="table-search">
				<Entry value={postPage} Change={EntryChange} />
				<Search data={data} DisplayedData={setdataSort} IsSearch={setIsSearch} />
			</div>
			<TableData
				sortedCol={sortedCol}
				Sort={Sort}
				labels={labels}
				data={dataSort}
				dataSort={dataSort}
				minimumRows={minimumRows}
				maximumRows={maximumRows}
			/>
			<div className="table-foot">
				<TableShowing
					totalEntries={data.length}
					isSearch={isSearch}
					minShow={minShow}
					maxShow={maxShow}
					minimumRows={minimumRows}
					maximumRows={maximumRows}
					totalEntriesShow={dataSort.length}
				/>
				<Pagination
					total={dataSort.length}
					displayedEntry={postPage}
					Click={setCurrentPage}
					current={current}
				/>
			</div>
		</div>
	);
}
export default TableMain;
TableMain.propTypes = {
	data: PropTypes.array.isRequired,
	labels: PropTypes.array.isRequired,
};
