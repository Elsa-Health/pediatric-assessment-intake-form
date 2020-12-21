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
		const { findByTestId } = render(<SubmitButton />);
		const button = findByTestId("submitButton");
		expect(button).not.toBeNull(); //checking the button if is not null
	});

	// FIXME: @george - this should not be tested until we refactor becuse we are going to make a request outwards
	// We need to mock the submit function

	// test("Button text change when button is pressed", async () => {
	// 	// const onPressMock = jest.fn();
	// 	const { findByTestId } = render(<SubmitButton />);

	// 	const button = await findByTestId("submitButton");
	// 	const buttonLoadingText = "Submitting the data...";

	// 	fireEvent.press(button);

	// 	//check if button is loading and is disabled, since they all share the same state value
	// 	// expect(button.props.children.props.disabled).toBe(true);

	// 	//check if after button click change to expected one
	// 	expect(button.props.children._owner.memoizedProps.children).toBe(
	// 		buttonLoadingText
	// 	);
	// 	// check if the data is submitted

	// 	// console.log('Button after press')
	// 	// console.log((await button).props.children._owner.memoizedProps.children,{depth:10})
	// 	// await waitFor(async() => expect(await findByText('Submitting the data...')).toBeTruthy())

	// 	// expect(button).not.toBeNull()  //checking the button if is not null
	// });
});
