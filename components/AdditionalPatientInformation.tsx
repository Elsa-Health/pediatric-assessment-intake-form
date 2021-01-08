import React from "react";
import { Text } from "react-native";
import { Table, Col, Row } from ".";
import {
	useBirthHistory,
	useMedicalHistory,
	useNutritionalHistory,
	useVaccinationHistory,
} from "../store";
import { styles } from "../style";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";
import { SimpleQuestion } from "./Question";

export function AdditionalPatientInformation() {
	const birthHistory = useBirthHistory((state) => state);
	const setBirthHistory = useBirthHistory((state) => state.setBirthHistory);

	const nutritionHistory = useNutritionalHistory((state) => state);
	const setNutritionHistory = useNutritionalHistory(
		(state) => state.setNutritionalHistory
	);

	const vaccinationHistory = useVaccinationHistory((state) => state);
	const setVaccinationHistory = useVaccinationHistory(
		(state) => state.setVaccinationHistory
	);

	const medicalHistory = useMedicalHistory((state) => state);
	const setMedicalHistory = useMedicalHistory(
		(state) => state.setMedicalHistory
	);

	return (
		<Table headerTitle="Additional Patient Information:">
			<Col style={styles.headerDarkGray}>
				<Text>Birth History</Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Gestation</Text>
				</Col>
				<Col cols={3}>
					<SimpleQuestion
						options={["full term", "pre-term", "post term"]}
						checked={birthHistory.gestation}
						setChecked={(text: string | string[]) => {
							setBirthHistory({ gestation: text as string });
						}}
					/>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Mother’s age at delivery:</Text>
				</Col>
				<Col cols={2}>
					<FitTextToCell>
						<Input
							text={birthHistory.mothersAgeAtDelivery}
							setText={(text: string) => {
								setBirthHistory({ mothersAgeAtDelivery: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Complications after delivery</Text>
				</Col>
				<Col cols={2}>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={birthHistory.complicationsAfterDelivery}
						setChecked={(text: string | string[]) => {
							setBirthHistory({
								complicationsAfterDelivery: text as string,
							});
						}}
					/>
				</Col>
				<Col cols={2} style={styles.headerLightGray}>
					<Text>(If Yes) Apgar Score:</Text>
				</Col>
				<Col cols={2}>
					<FitTextToCell>
						<Input
							text={birthHistory.apgarScore}
							setText={(text: string | string[]) => {
								setBirthHistory({ apgarScore: text as string });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col cols={2} style={styles.headerLightGray}>
					<Text>Additional birth history notes:</Text>
				</Col>
				<Col cols={4}>
					<FitTextToCell>
						<Input
							text={birthHistory.additionalBirthHistoryNotes}
							setText={(text: string) => {
								setBirthHistory({
									additionalBirthHistoryNotes: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Col style={styles.headerDarkGray}>
				<Text>Nutritional History</Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Was the child breast fed?</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={nutritionHistory.breastfed}
						setChecked={(text: string | string[]) => {
							setNutritionHistory({ breastfed: text as string });
						}}
					/>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>(If yes) Was it exclusive?</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={nutritionHistory.wasItExclusive}
						setChecked={(text: string | string[]) => {
							setNutritionHistory({
								wasItExclusive: text as string,
							});
						}}
					/>
				</Col>
			</Row>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>(If yes) When did the breastfeeding start?</Text>
				</Col>
				<Col cols={2}>
					<SimpleQuestion
						options={["At Birth", "After Birth"]}
						checked={nutritionHistory.breadfeedingStartTime}
						setChecked={(text: string | string[]) => {
							setNutritionHistory({
								breadfeedingStartTime: text as string,
							});
						}}
					/>

					<Text>
						If after birth, breastfeeding started after how many
						days?{" "}
					</Text>
					<Input
						text={nutritionHistory.breastfeedingStartTimeDays}
						label="Days"
						setText={(text: string) => {
							setNutritionHistory({
								breastfeedingStartTimeMonths: text,
							});
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>(If yes) When did the breastfeeding start?</Text>
				</Col>
				<Col>
					{/* <Row style={{ alignItems: "center" }}> */}
					{/* <SimpleQuestion
              options={["At Birth", "After Birth"]}
              checked={nutritionHistory.breadfeedingStartTime}
              setChecked={(text) => {
                // console.log("Hello There ", text);
                // setGeneral({ fever: text, ...general });
                setNutritionHistory({ breadfeedingStartTime: text });
              }}
            /> */}

					<FitTextToCell>
						<Input
							text={nutritionHistory.breastfeedingStartTimeMonths}
							label="Months"
							setText={(text: string) => {
								setNutritionHistory({
									breastfeedingStartTimeMonths: text,
								});
							}}
						/>
					</FitTextToCell>
					{/* </Row> */}
				</Col>

				<Col style={styles.headerLightGray}>
					<Text>Was the child on vitamin A supplements?</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={nutritionHistory.vitaminASupplements}
						setChecked={(text: string | string[]) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setNutritionHistory({
								vitaminASupplements: text as string,
							});
						}}
					/>
				</Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Vaccination History</Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Is the child up to date on all vaccines?</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={vaccinationHistory.updateOnAllVaccines}
						setChecked={(text: string | string[]) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setVaccinationHistory({
								updateOnAllVaccines: text as string,
							});
						}}
					/>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>
						If no, please note below which ones they are missing:
					</Text>
				</Col>
			</Row>
			<Col>
				<FitTextToCell>
					<Input
						text={vaccinationHistory.missingNotes}
						setText={(text: string) => {
							setVaccinationHistory({ missingNotes: text });
						}}
					/>
				</FitTextToCell>
			</Col>
			<Col style={styles.headerDarkGray}>
				<Text>Previous Medical History</Text>
			</Col>

			<Row>
				<Col>
					<Text>Any previous admission ? </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={medicalHistory.previousAdmission}
						setChecked={(text: string | string[]) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setMedicalHistory({
								previousAdmission: text as string,
							});
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="If yes, why?"
							text={medicalHistory.whyPreviousAdmission}
							setText={(text: string) => {
								setMedicalHistory({
									whyPreviousAdmission: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col>
					<Text>History of antibiotic use?</Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={medicalHistory.antibioticUse}
						setChecked={(text: string | string[]) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setMedicalHistory({
								antibioticUse: text as string,
							});
						}}
					/>
				</Col>
			</Row>
		</Table>
	);
}
