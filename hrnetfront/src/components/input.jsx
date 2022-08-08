function Input({ labelTitle, type, name, value, setIn, className, min, max }) {
	return (
		<label className="label" htmlFor={name}>
			<p>{labelTitle}</p>
			<input
				className={className}
				type={type}
				name={name}
				value={value}
				min={min}
				max={max}
				required
				onChange={(e) => {
					setIn(e.target.value);
				}}
			/>
		</label>
	);
}
export default Input;
