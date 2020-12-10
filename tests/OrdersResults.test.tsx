import React from "react";
import { render } from "@testing-library/react-native";
import { OrdersResults } from "../components";

describe("<OrdersResults/>", () => {
	it("it can render order and results section", () => {
		render(<OrdersResults />);
	});
});
