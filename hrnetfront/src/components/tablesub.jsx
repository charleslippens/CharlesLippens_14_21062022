import "../styling/tablemain.css";
import PropTypes from "prop-types";

/**
 * Create everything inside table, getting and displays datas
 * @param {array} {dataSort
 * @param {array} labels
 * @param {array} data}
 * @returns {table}
 */
function TableData({ minimumRows, maximumRows, dataSort, labels, data }) {
	const genID = () => {
		return "_" + Math.random().toString(36).substr(2, 9);
	};
	return (
		<table className="table-main">
			<caption className="table-title">Current Employees</caption>
			<thead>
				<tr role="row">
					{labels.map((label) => (
						<th key={genID()}>
							<div>
								<span key={label.value}>{label.text}</span>
							</div>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{dataSort.length === 0 && (
					<tr>
						<td className="nodata" colSpan={labels.length}>
							No data
						</td>
					</tr>
				)}
				{data.map((element, index) => {
					if (index + 1 >= minimumRows && index < maximumRows) {
						return (
							<tr key={genID()} className="dtb-table-row">
								{Object.values(element).map((value, j) => (
									<td
										key={genID()}
										className={
											j === 0 ? "dtb-table-cell first-cell" : "dtb-table-cell"
										}
									>
										{value}
									</td>
								))}
							</tr>
						);
					}
					return null;
				})}
			</tbody>
		</table>
	);
}

export default TableData;
TableData.propTypes = {
	data: PropTypes.array.isRequired,
	labels: PropTypes.array.isRequired,
	dataSort: PropTypes.array.isRequired,
	minimumRows: PropTypes.number.isRequired,
	maximumRows: PropTypes.number.isRequired,
};
