//test jest/react testing library
//test End to End cypress
import { render } from "@testing-library/react";
import Header from "../../components/header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
	it("Should render Header", () => {
		render(
			<MemoryRouter>
				<Header link={"./"} label={"Wealth Health HRNet"} />;
			</MemoryRouter>
		);
	});
});
