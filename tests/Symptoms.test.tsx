import React from "react";
import { render } from "@testing-library/react-native";
import { Symptoms } from "../components";

describe("<Symptoms/>", () => {
	it("it can render symptoms section", () => {
		render(<Symptoms />);
	});
});
