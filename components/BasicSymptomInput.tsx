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
	checked,
	setChecked,
	days,
	setDays,
	timesDay,
	setTimesDay,
}: {
	label?: string;
	onChange?: (res: {
		checked?: string;
		days?: string;
		timesDay?: string;
	}) => void;
	times?: boolean;
	showNumberDays?: boolean;
	options?: string[];
	checked: string | undefined;
	setChecked: (data: string) => void;
	days: string | undefined;
	setDays: (data: string) => void;
	timesDay?: string | undefined;
	setTimesDay?: (data: string) => void;
}) => {
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
					setChecked={(text: string | string[]) => {
						console.log("Something check and here it is : ", text);

						setChecked(text as string);
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
								setText={(text: string) => {
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
							setText={(text: string) => {
								setDays(text);
							}}
						/>
					)}
				</FitTextToCell>
			</Col>
		</>
	);
};
