import React from "react";
import { render } from "@testing-library/react-native";
import { ChiefComplaints } from "../components";

describe("<ChiefComplaints/>", () => {
	it("it can render chief components section", () => {
		render(<ChiefComplaints />);
	});
});
