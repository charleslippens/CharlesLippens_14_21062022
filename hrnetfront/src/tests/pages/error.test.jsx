import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Error from "../../pages/error404.jsx";

describe("Error", () => {
	it("Should render Error", () => {
		render(
			<MemoryRouter>
				<Error />
			</MemoryRouter>
		);
	});
});
