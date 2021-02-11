import React, { useState } from "react";
import { Col, SimpleQuestion, FitTextToCell, Input } from ".";

import { Text } from "react-native";
import { styles } from "../style";
import { Spacer } from ".";

export const BasicSymptomInput = ({
	label,
	onChange,
	times,
	showNumberDays = true,
	options,
	checked: checked_default,
	days: days_default,
	timesDay: timesDay_default,
}: {
	label?: string;
	onChange?: (...args: any) => {};
	times?: number;
	showNumberDays?: boolean;
	options?: string[];
	checked?: any;
	days?: string | number;
	timesDay: string | any;
}) => {
	const [checked, setChecked] = useState(checked_default);

	// On mount, set the default checked value to
	React.useEffect(() => {
		setChecked(checked_default);
		setDays(days_default);
		setTimesDay(timesDay_default);
	}, [checked_default, days_default, timesDay_default]);

	//TODO : to manage input text outside the component

	const [days, setDays] = useState(days_default);
	const [timesDay, setTimesDay] = useState("");
	React.useEffect(() => {
		// to fix issues for days left empty

		// if (checked !== "" && onChange) onChange({ checked, days, timesDay });
		onChange && onChange({ checked, days, timesDay });
	}, [checked, timesDay, days]);

	// console.log(checked_default, "efault", label);

	return (
		<>
			<Col style={styles.headerLightGray}>
				<Text>{label}</Text>
			</Col>

			<Col>
				<SimpleQuestion
					options={
						options && options.length > 0 ? options : ["yes", "no"]
					}
					checked={checked}
					setChecked={(text: React.SetStateAction<undefined>) => {
						setChecked(text);
					}}
				/>
			</Col>
			<Col>
				<FitTextToCell>
					{times && (
						<>
							<Input
								label="# TImes / Day"
								placeholder="# TImes / Day"
								text={timesDay}
								setText={(
									text: React.SetStateAction<string>
								) => {
									setTimesDay(text);
								}}
							/>
							<Spacer size={8} />
						</>
					)}
					{showNumberDays && (
						<Input
							label="Days"
							placeholder="Days"
							text={days}
							setText={(text: React.SetStateAction<string>) => {
								setDays(text);
							}}
						/>
					)}
				</FitTextToCell>
			</Col>
		</>
	);
};
