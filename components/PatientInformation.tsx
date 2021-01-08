import React, { useState } from "react";
import { Text } from "react-native";
import { Table, Row, Col, FitTextToCell, Input, SimpleQuestion } from ".";
import { usePatientInformation } from "../store";
import { styles } from "../style";

export function PatientInformation() {
	const patientInfo = usePatientInformation((state) => state);
	const setPatientInfo = usePatientInformation(
		(state) => state.setPatientInformation
	);

	return (
		<Table headerTitle="Patient Information">
			<Row>
				<Col cols={3} style={styles.headerLightGray}>
					<Text style={{}}>DOB (dd/mm/yy)</Text>
				</Col>
				<Col cols={3}>
					<FitTextToCell>
						<Input
							text={patientInfo.dob}
							placeholder="24/06/2020"
							setText={(text: string) => {
								setPatientInfo({ dob: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Age</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Years"
							// placeholder="Years"
							text={patientInfo.years}
							setText={(text: string) => {
								// console.log("info here:", text);
								setPatientInfo({ years: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Mos"
							// placeholder="Mos"
							text={patientInfo.months}
							setText={(text: string) => {
								// console.log("info here:", text);
								setPatientInfo({ months: text });
							}}
							keyboardType="numeric"
						/>
					</FitTextToCell>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							// placeholder="Days"
							text={patientInfo.days}
							setText={(text: string) => {
								// console.log("info here:", text);
								setPatientInfo({ days: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col cols={1} style={styles.headerLightGray}>
					<Text>Sex</Text>
				</Col>
				<Col cols={3}>
					<SimpleQuestion
						options={["male", "female"]}
						checked={patientInfo.sex}
						setChecked={(text: string | string[]) => {
							setPatientInfo({ sex: text as string });
						}}
					/>
				</Col>
				<Col cols={3} style={styles.headerLightGray}>
					<Text> Residency Location</Text>
				</Col>
				<Col cols={4}>
					<FitTextToCell>
						<Input
							text={patientInfo.location}
							setText={(text: string) => {
								// console.log("Residence:", text);
								setPatientInfo({ location: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col cols={4} style={styles.headerLightGray}>
					<Text style={{}}>Any known medical condition?</Text>
					<Text style={{}}>
						(Sc/Diabetes/HIV/Cardiac/Asthma /Other_)
					</Text>
				</Col>
				<Col cols={8}>
					<FitTextToCell>
						<Input
							text={patientInfo.otherMedicalConditaion}
							setText={(text: string) => {
								// console.log("Medical Condition :", text);
								setPatientInfo({
									otherMedicalConditaion: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
		</Table>
	);
}
