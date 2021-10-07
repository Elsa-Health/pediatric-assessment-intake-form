import React from "react";
import { render } from "@testing-library/react-native";

import App from "../App";

global.window = Object.create(window);
const url = "";
Object.defineProperty(window, "parent", {
	value: {
		location: url,
	},
});

Object.defineProperty(window, "addEventListener", {
	value: () => {},
});

test("examples of some things", async () => {
	render(<App />);
	// const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

	// console.log("All json is here")
	// const js=toJSON()?.children
	// console.dir(js)

	// expect(toJSON()).toMatchSnapshot();
});
