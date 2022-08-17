import PropTypes from "prop-types";

/**
 * Select : dropdown for states, departments
 * @param {any} {Title
 * @param {any} name
 * @param {any} value
 * @param {any} setElement
 * @param {any} options}
 * @returns {any}
 */
function Select({ Title, name, value, setSelect, options }) {
	return (
		<label className="label" htmlFor={name}>
			<p>{Title}</p>
			<select name={name} required value={value} onChange={(e) => setSelect(e.target.value)}>
				{options.map((element, index) => (
					<option key={`${index}-${element.label}`}>{element.name}</option>
				))}
			</select>
		</label>
	);
}

export default Select;

Select.propTypes = {
	setSelect: PropTypes.func,
	options: PropTypes.array,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	Title: PropTypes.string.isRequired,
};
