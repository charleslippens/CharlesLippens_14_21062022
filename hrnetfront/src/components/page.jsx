import PropTypes from "prop-types";

function Pagination({ Click, current, total, displayedEntry }) {
	const nbPages = Math.ceil(total / displayedEntry);
	const nbPagesArray = new Array(nbPages).fill(0);
	const genID = () => {
		return "_" + Math.random().toString(36).substr(2, 9);
	};

	//  previous page
	const Previous = () => {
		if (current > 1) Click(current - 1);
	};

	//  next page
	const Next = () => {
		if (current < nbPages) Click(current + 1);
	};

	return (
		<div className="pagination">
			<button
				type="button"
				onClick={Previous}
				className={current === 1 ? "numb numb-disabled" : "numb"}
			>
				Previous
			</button>
			{nbPagesArray.map((element, index) => (
				<button
					type="button"
					key={genID()}
					onClick={() => Click(index + 1)}
					className={current === index + 1 ? "numb numb-active" : "numb"}
				>
					{index + 1}
				</button>
			))}

			<button
				type="button"
				onClick={Next}
				className={current === nbPages || total === 0 ? "numb numb-disabled" : "numb"}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;

Pagination.propTypes = {
	current: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	displayedEntry: PropTypes.number.isRequired,
	Click: PropTypes.func.isRequired,
};
