import Select from "../components/select.jsx";
import { render, screen, fireEvent } from "@testing-library/react";

const handler = jest.fn();

describe("Select", () => {
	it("Should render select", () => {
		render(
			<Select
				Title="State"
				name="state"
				options={[
					{
						name: "Alabama",
						label: "AL",
					},
					{
						name: "Alaska",
						label: "AK",
					},
				]}
				setSelect={handler}
				value={"AL"}
			/>
		);
		let select = screen.getByRole("combobox");
		fireEvent.change(select, { target: { value: "AK" } });
		expect(handler).toHaveBeenCalled();
	});
});
