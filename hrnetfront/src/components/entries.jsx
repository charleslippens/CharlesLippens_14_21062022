import "../styling/search.css";
import PropTypes from "prop-types";

/**
 * Displaying how many entries/rows per page in table: show select
 * @param {any} {value
 * @param {any} Change}
 * @returns {any}
 */
function Entry({ value, Change }) {
	return (
		<>
			<div className="table-entry-1">
				<label htmlFor="choose">{`Show:`}</label>
				<select name="choose" id="choose" value={value} onChange={(event) => Change(event)}>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
				<span>{` entries`}</span>
			</div>
		</>
	);
}

export default Entry;

Entry.propTypes = {
	Change: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
};
