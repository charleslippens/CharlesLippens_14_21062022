/**
 * Search in every entries of table
 * @param {any} {data
 * @param {any} DisplayedData
 * @param {any} IsSearch}
 * @returns {any}
 */
function Search({ data, DisplayedData, IsSearch }) {
	const normalizeTxt = (txt) => {
		return txt
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.trim();
	};

	const Search = (event) => {
		const value = normalizeTxt(event.target.value);
		if (value.length > 0) {
			const dataDisplay = data.filter((element) => {
				const values = Object.values(element)
					.map((x) => normalizeTxt(x))
					.join(" ");
				return values.includes(value);
			});
			DisplayedData(dataDisplay);
			IsSearch(true);
		} else {
			DisplayedData(data);
			IsSearch(false);
		}
	};

	return (
		<div className="table-search-2">
			<label htmlFor="search">{`Search: `}</label>
			<input type="search" id="search" name="search" onChange={(event) => Search(event)} />
		</div>
	);
}
export default Search;
