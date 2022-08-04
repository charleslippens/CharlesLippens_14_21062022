import "../styling/tablemain.css";

export default function Table({ labels, data }) {
	const genID = () => {
		return "_" + Math.random().toString(36).substr(2, 9);
	};
	return (
		<table className="table_main">
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
				{data.length === 0 && (
					<tr>
						<td className="nodata" colSpan={labels.length}>
							No data
						</td>
					</tr>
				)}
				{/* Affichage la page actuelle */}
				{data.map((element) => {
					return (
						<tr key={genID()}>
							{Object.values(element).map((value) => (
								<td key={genID()}>{value}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}