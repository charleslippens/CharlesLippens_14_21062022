function Input({ labelTitle, type, name, value, setIn, className }) {
	return (
		<label className="label" htmlFor={name}>
			<p>{labelTitle}</p>
			<input
				className={className}
				type={type}
				name={name}
				value={value}
				required
				onChange={(e) => {
					setIn(e.target.value);
				}}
			/>
		</label>
	);
}
export default Input;
