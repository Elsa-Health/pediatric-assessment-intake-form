import React from "react";
import { render } from "@testing-library/react-native";
import { PatientInformation } from "../components";

describe("<PatientInformation/>", () => {
	it("it can render the the patient information section", () => {
		render(<PatientInformation />);
	});
});
