// THIS APP WORKS BEST IN GOOGLE CHROME SOME THINGS BREAKS IN FIREFOX

import React, { useState } from "react";
import { View } from "react-native";
// import { TextField } from 'material-bread'

import { SUBMIT_URL } from "@env";

import _ from "lodash";

// TODO: CReate Radio/Checkbox Question Component
// TODO: Create TextInput Component
// TODO: Create a better grid system
// TODO: Reduce repeating codes

// all the state here before the components

// importing all the components and states here
import { Button, H4, Switcher, Radio, ThemeProvider } from "nachos-ui";

class RadioExample extends React.Component {
	state = { value: null };
	render() {
		const radioStyle = { margin: 10 };
		return (
			<View>
				<H4>Example:</H4>
				{/* <Button>Button</Button> */}
				<Switcher
					defaultSelected="bus"
					onChange={(value) => this.setState({ value })}
				>
					<Radio value="car" style={radioStyle} />
					<Radio value="bus" style={radioStyle} />
				</Switcher>
			</View>
		);
	}
}

import {
	Row,
	Col,
	Input,
	CheckBox,
	SimpleQuestion,
	Spacer,
	FitTextToCell,
	BasicSymptomInput,
	Header,
	MainHeader,
	TableHeader,
	Table,
	PatientInformation,
	ChiefComplaints,
	Symptoms,
	AdditionalPatientInformation,
	SignsExam,
	Diefferentials,
	OrdersResults,
	FinalDiagnosis,
	SubmitButton,
	// ChiefComplaints
} from "./components";

export default function App() {
	// const mainStore = useMainStore((state) => state);
	// const { SUBMIT_URL } = process.env;
	// console.log("ROOT APP URL ", SUBMIT_URL);
	// console.log(TestRenderer.create(<Symptoms/>).toJSON());
	const [check, setCheck] = useState("");
	return (
		<ThemeProvider>
			<View style={{ backgroundColor: "#DEDFE4", paddingVertical: 36 }}>
				<View
					style={{
						padding: 72,
						width: 1024,
						alignSelf: "center",
						backgroundColor: "white",
					}}
				>
					{/* <SimpleQuestion
						options={["Hello", "World"]}
						label="Some question"
						checked={check}
						setChecked={(el) => {
							console.log("some check ", el);
							setCheck(el);
						}}
					/> */}

					<Header />
					<MainHeader />
					<PatientInformation />
					<Spacer size={12} />
					<ChiefComplaints />
					<Spacer size={12} />
					<Symptoms />
					<Spacer size={12} />
					<AdditionalPatientInformation />
					<Spacer size={12} />
					<SignsExam />
					<Spacer size={12} />
					<Diefferentials />
					<Spacer size={12} />
					<OrdersResults />
					<Spacer size={23} />
					<FinalDiagnosis />
					<Spacer size={23} />
					<SubmitButton />
				</View>
			</View>
		</ThemeProvider>
	);
}
