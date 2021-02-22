import React from "react";
import { Table, Row, Col } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";
import { useDifferentials } from "../store";

export function Diefferentials() {
	const { updateDifferentials, ...differentials } = useDifferentials(
		(state) => state
	);

	return (
		<Table headerTitle="Differentials">
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Differential #1</Text>
				</Col>
				<Col cols={3}>
					<FitTextToCell>
						<Input
							text={differentials.differentialOne}
							setText={(text: string) => {
								updateDifferentials({
									differentialOne: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Differential #2</Text>
				</Col>
				<Col cols={3}>
					<FitTextToCell>
						<Input
							text={differentials.differentialTwo}
							setText={(text: string) => {
								updateDifferentials({
									differentialTwo: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Differential #3</Text>
				</Col>
				<Col cols={3}>
					<FitTextToCell>
						<Input
							text={differentials.differentialThree}
							setText={(text: string) => {
								updateDifferentials({
									differentialThree: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
		</Table>
	);
}
