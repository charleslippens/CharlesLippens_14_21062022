import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/input.jsx";

const handler = jest.fn();

describe("Input", () => {
	it("Should render input firstname", () => {
		render(
			<Input
				Title="First Name"
				name="firstName"
				type="text"
				Set={handler}
				value={"charles"}
				max={10}
			/>
		);
		const label = screen.getByRole("textbox");
		expect(label.name).toBe("firstName");
		let input = screen.getByRole("textbox");
		fireEvent.input(input, { target: { value: "a" } });
		expect(handler).toHaveBeenCalled();
	});
	it("Should render input lastname", () => {
		render(
			<Input
				Title="Last Name"
				name="lastName"
				type="text"
				Set={handler}
				value={"lipp"}
				max={10}
			/>
		);
		const label = screen.getByRole("textbox");
		expect(label.name).toBe("lastName");
		let input = screen.getByRole("textbox");
		fireEvent.input(input, { target: { value: "a" } });
		expect(handler).toHaveBeenCalled();
	});
});
