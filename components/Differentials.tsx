import React from "react";
import { Table, Row, Col } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";
import { useDifferentials } from "../store";

export function Diefferentials() {

  const differentials = useDifferentials((state) => state);
	const setDifferentials = useDifferentials(
		(state) => state.setDifferentials
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
								setDifferentials({
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
								setDifferentials({
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
								setDifferentials({
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
