import React from "react";
import { Row, CheckBox } from ".";

import { View, Text } from "react-native";
import _ from "lodash";
import { Col } from "./Col";
import { RadioGroup as NachosRadioGroup } from "nachos-ui";
import { RadioButton } from "./";

interface SimpleQuestionProps {
	label?: string;
	options?: string[];
	horizontal?: boolean;
	radio?: boolean;
	checked?: string | string[];
	setChecked?: any;
	mutiple?: boolean;
}

const PROP = ["Heello", "World"];

export const SimpleQuestion: React.FC<SimpleQuestionProps> = React.memo(
	({
		label,
		options,
		horizontal = true,
		radio = true,
		checked,
		setChecked,
		mutiple = false,
	}) => {
		// const simpleQns = [{ label: 'Male' }, { label: 'Female' }];
		// const [checked, setChecked] = React.useState('first');
		// const [value, setValue] = React.useState("");
		if (radio) {
			return (
				<>
					{label && <Text>{label}</Text>}
					{horizontal ? (
						<Row
							style={{
								flexWrap: "wrap",
								marginBottom: 5,
							}}
						>
							<RadioButton
								options={options}
								setChecked={setChecked}
								checked={checked}
								mutiple={mutiple}
							/>
						</Row>
					) : (
						<Col
							style={{
								borderWidth: 0,
								flexWrap: "wrap",
								marginBottom: 5,
							}}
						>
							<RadioButton
								options={options}
								setChecked={setChecked}
								checked={checked}
								mutiple={mutiple}
							/>
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
