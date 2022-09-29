import { render } from "@testing-library/react";
import Footer from "../components/footer.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
	it("Should render Footer", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);
	});
});
