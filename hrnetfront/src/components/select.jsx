function Select({ labelTitle, name, value, setElement, options }) {
	return (
		<label className="label" htmlFor={name}>
			<p>{labelTitle}</p>
			<select name={name} required value={value} onChange={(e) => setElement(e.target.value)}>
				{options.map((element, index) => (
					<option key={`${index}-${element.label}`}>{element.name}</option>
				))}
			</select>
		</label>
	);
}

export default Select;
