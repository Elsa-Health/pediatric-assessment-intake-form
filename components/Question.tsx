import React from "react";
import { Row, CheckBox } from ".";
import { RadioButton } from "react-native-paper";
import { View, Text } from "react-native";
import _ from "lodash";
import { Col } from "./Col";
import { RadioGroup as NachosRadioGroup } from "nachos-ui";

interface SimpleQuestionProps {
	label?: string;
	options?: string[];
	horizontal?: boolean;
	radio?: boolean;
	checked: string;
	setChecked?: any;
}

export const SimpleQuestion: React.FC<SimpleQuestionProps> = React.memo(
	({
		label,
		options,
		horizontal = true,
		radio = true,
		checked,
		setChecked,
	}) => {
		// const simpleQns = [{ label: 'Male' }, { label: 'Female' }];
		// const [checked, setChecked] = React.useState('first');
		const [value, setValue] = React.useState("");
		if (radio) {
			return (
				<>
					{label && <Text>{label}</Text>}
					{horizontal ? (
						<Row
							style={{
								flexWrap: "wrap",
								
							}}
						>
							<NachosRadioGroup
								onChange={(value) => setChecked(value)}
								defaultSelected="gr"
								options={options}
								style={{ flexDirection: "column" }}
							/>
							{/* {options &&
								options.map((qn, index) => (
									<View key={`simple-question__${index}`}>
										<RadioButton
											value={qn}
											status={
												checked === qn
													? "checked"
													: "unchecked"
											}
											onPress={() => {
												// console.log("Checked : ", qn);
												setChecked(qn);
											}}
										/>
										<View
											style={{
												alignItems: "center",
												justifyContent: "center",
												paddingTop: 0,
												marginLeft: -3,
											}}
										>
											<Text style={{}}>
												{qn
													? _.startCase(
															_.camelCase(qn)
													  )
													: ""}
											</Text>
										</View>
									</View>
								))} */}
						</Row>
					) : (
						<Col style={{ borderWidth: 0,backgroundColor:"yellow", flexWrap: 'wrap' }}>
							<NachosRadioGroup
								onChange={(value) => setChecked(value)}
								defaultSelected="gr"
								options={options}
								style={{ flexDirection: "column",backgroundColor:'red', flexWrap: 'wrap' }}
							/>

							{/* {options &&
								options.map((qn, index) => (
									<Row
										key={`question___${index}`}
										style={{ alignItems: "center" }}
									>
										<RadioButton
											value={qn}
											status={
												checked === qn
													? "checked"
													: "unchecked"
											}
											onPress={() => {
												// console.log("Checked : ", qn);
												setChecked(qn);
											}}
										/>
										<View
											style={{
												alignItems: "center",
												justifyContent: "center",
												paddingTop: 0,
												marginLeft: -3,
											}}
										>
											<Text style={{}}>
												{qn
													? _.startCase(
															_.camelCase(qn)
													  )
													: ""}
											</Text>
										</View>
									</Row>
								))} */}
						</Col>
					)}
				</>
			);
		}

		return (
			<Row>
				{options &&
					options.map((qn, index) => (
						<CheckBox key={`question___${index}`} label={qn} />
					))}
			</Row>
		);
	},
	(prevProps, nextProps) => {
		return prevProps.checked === nextProps.checked;
	}
);
