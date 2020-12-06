import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import App from "../App";

test("examples of some things", async () => {
	const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

	// expect(toJSON()).toMatchSnapshot();
});
