import React, { useState } from "react";
import { Text } from "react-native";
import { Table, Row, Col, FitTextToCell, Input, SimpleQuestion } from ".";
import { usePatientInformation } from "../store";
import { styles } from "../style";

export function PatientInformation() {
	const { updatePatientInformation, ...patientInfo } = usePatientInformation(
		(state) => state
	);

	console.log(patientInfo);
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
								updatePatientInformation({ dob: text });
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
							text={patientInfo.years}
							setText={(text: string) => {
								updatePatientInformation({ years: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Mos"
							text={patientInfo.months}
							setText={(text: string) => {
								updatePatientInformation({ months: text });
							}}
							keyboardType="numeric"
						/>
					</FitTextToCell>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							text={patientInfo.days}
							setText={(text: string) => {
								updatePatientInformation({ days: text });
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
							updatePatientInformation({ sex: text as string });
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
								updatePatientInformation({ location: text });
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
							text={patientInfo.otherMedicalCondition}
							setText={(text: string) => {
								updatePatientInformation({
									otherMedicalCondition: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
		</Table>
	);
}
