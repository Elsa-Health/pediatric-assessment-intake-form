import React from "react";
import { render } from "@testing-library/react-native";
import { SignsExam } from "../components";

describe("<SignsExam/>", () => {
	it("it can render the signs and exams section", () => {
		render(<SignsExam />);
	});
});
