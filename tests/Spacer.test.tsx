import React from "react";
import { render } from "@testing-library/react-native";
import {  Spacer } from "../components";

describe("<Spacer/>", () => {
	it("it can render spacer component : ", () => {
		render(<Spacer size={12}/>);
	});
});
