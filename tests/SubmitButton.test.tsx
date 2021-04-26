import React from "react";
import {
	render,
	fireEvent,
	cleanup,
	waitFor,
} from "@testing-library/react-native";
import { SubmitButton } from "../components";

describe("<SubmitButton/>", () => {
	afterEach(cleanup);

	test("Button contain button to be pressed", () => {
		const { findByTestId } = render(
			<SubmitButton
				user={{ email: "test@email.com", uid: "focszmlloew" }}
			/>
		);
		const button = findByTestId("submitButton");
		expect(button).not.toBeNull(); //checking the button if is not null
	});
});
