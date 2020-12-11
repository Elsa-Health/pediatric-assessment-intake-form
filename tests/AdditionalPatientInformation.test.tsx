import React from "react";
import { render } from "@testing-library/react-native";
import { AdditionalPatientInformation } from "../components";

describe("<AdditionalPatientInformation/>", () => {
	it("it can render the patient additional information section", () => {
		render(<AdditionalPatientInformation />);
	});
});
