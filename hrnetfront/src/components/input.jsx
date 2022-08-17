import PropTypes from "prop-types";

/**
 * Input for all fields on form
 * @param { Title, type, name, value, Set, className, min, max } parm1
 */
function Input({ Title, type, name, value, Set, className, min, max }) {
	return (
		<label className="label" htmlFor={name}>
			<p>{Title}</p>
			<input
				className={className}
				type={type}
				name={name}
				value={value}
				min={min}
				max={max}
				required
				onChange={(e) => {
					Set(e.target.value);
				}}
			/>
		</label>
	);
}
export default Input;
Input.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
	Set: PropTypes.func,
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	Title: PropTypes.string,
};
