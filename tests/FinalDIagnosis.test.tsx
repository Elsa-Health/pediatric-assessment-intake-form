import React from "react";
import { render } from "@testing-library/react-native";
import { FinalDiagnosis } from "../components";

describe("<FinalDiagnosis/>", () => {
	it("it can render the final diagnosis section", () => {
		render(<FinalDiagnosis />);
	});
});
