import PropTypes from "prop-types";
import "../styling/search.css";

/**
 * Generate showing description: infos about total entries, max, min etc
 * @param {any} {totalEntries
 * @param {any} isSearch
 * @param {any} minimumRows
 * @param {any} maximumRows
 * @param {any} totalEntriesShow
 * @param {any} minShow
 * @param {any} maxShow
 * @param {any} }
 * @returns {any}
 */
function TableShowing({
	totalEntries,
	isSearch,
	minimumRows,
	maximumRows,
	totalEntriesShow,
	minShow,
	maxShow,
}) {
	return (
		<div className="table-foot">
			{totalEntries === 0 ? (
				<p className="table-foot-p"></p>
			) : (
				[
					isSearch ? (
						<span
							key="entries-filter"
							className="table-foot-p"
						>{`Showing ${minShow} to ${maxShow} of ${totalEntriesShow} entries (filtered from ${totalEntries} total entries)`}</span>
					) : (
						<span
							key="entries"
							className="table-foot-p"
						>{`Showing ${minimumRows} to ${maximumRows} of ${totalEntries} entries`}</span>
					),
				]
			)}
		</div>
	);
}
export default TableShowing;
TableShowing.propTypes = {
	minimumRows: PropTypes.number.isRequired,
	maximumRows: PropTypes.number.isRequired,
	totalEntries: PropTypes.number.isRequired,
	minShow: PropTypes.number.isRequired,
	maxShow: PropTypes.number.isRequired,
	totalEntriesShow: PropTypes.number.isRequired,
	isSearch: PropTypes.bool,
};
