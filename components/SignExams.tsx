import React from "react";
import { Table, Col, Row } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { Input } from "./Input";
import { FitTextToCell } from "./FixTextToCell";
import { SimpleQuestion } from "./Question";
import { Spacer } from "./Spacer";
import {
	useAbdominalExamination,
	useGeneralExamination,
	useNeurologicalExamination,
	useRespiratory,
	useRespiratoryExamination,
	useSkinExamination,
	useVitalSigns,
} from "../store";

export function SignsExam() {
	const vitalSigns = useVitalSigns((state) => state);
	const setVitalSigns = useVitalSigns((state) => state.setVitalSigns);

	const generalExamination = useGeneralExamination((state) => state);
	const setGeneralExamination = useGeneralExamination(
		(state) => state.setGeneralExamination
	);

	const respiratoryExamination = useRespiratoryExamination((state) => state);
	const setRespiratoryExamination = useRespiratoryExamination(
		(state) => state.setRespiratoryExamination
	);

	const abdominalExamination = useAbdominalExamination((state) => state);
	const setAbdominalExamination = useAbdominalExamination(
		(state) => state.setAbdominalExamination
	);

	const skinExamination = useSkinExamination((state) => state);
	const setSkinExamination = useSkinExamination(
		(state) => state.setSkinExamination
	);

	const neurologicalExamination = useNeurologicalExamination(
		(state) => state
	);
	const setNeurologicalExamination = useNeurologicalExamination(
		(state) => state.setNeurologicalExamination
	);

	// console.log("Debugging the signs and exams: ");
	// console.table(abdominalExamination);

	return (
		<Table headerTitle="Signs/ Exam">
			<Col style={styles.headerDarkGray}>
				<Text>Vital Signs</Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Temp</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="*C"
							text={vitalSigns.temp}
							setText={(text) => {
								setVitalSigns({ temp: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Resp Rate</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="bpm"
							text={vitalSigns.respRate}
							setText={(text) => {
								setVitalSigns({ respRate: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>HR</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="/min"
							text={vitalSigns.hr}
							setText={(text) => {
								setVitalSigns({ hr: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>O2 Sat</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder=" % "
							text={vitalSigns.o2Sat}
							setText={(text) => {
								setVitalSigns({ o2Sat: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>BP</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="mmhg"
							text={vitalSigns.bp}
							setText={(text) => {
								setVitalSigns({ bp: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Weight</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="kg"
							text={vitalSigns.weight}
							setText={(text) => {
								setVitalSigns({ weight: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Height/Length</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="cm"
							text={vitalSigns.height}
							setText={(text) => {
								setVitalSigns({ height: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Col style={styles.headerDarkGray}>
				<Text>General Examination</Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Mental Status:</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={[
							"alert",
							"drowsy",
							"widthdrawn",
							"not responding",
						]}
						checked={generalExamination.mentalStatus}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ mentalStatus: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Child’s appearance (can select multiple):</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={[
							"sick",
							"wasted",
							"lethargic",
							"normal",
							"alert",
						]}
						checked={generalExamination.childAppearance}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });

							setGeneralExamination({ childAppearance: text });
						}}
						mutiple={true}
					/>
				</Col>
			</Row>

			<Row>
				<Col cols={2} style={styles.headerDarkGray}>
					<Text>Hair </Text>
				</Col>
				<Col cols={2} style={styles.headerLightGray}>
					<Text>Color</Text>
				</Col>
				<Col cols={3}>
					<SimpleQuestion
						options={["normal", "abnormal"]}
						checked={generalExamination.hairColor}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ hairColor: text });
						}}
					/>
				</Col>
				<Col cols={2} style={styles.headerLightGray}>
					<Text>Texture</Text>
				</Col>
				<Col cols={3}>
					<SimpleQuestion
						options={["thick", "brittle"]}
						checked={generalExamination.hairTexture}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ hairTexture: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col cols={2} style={styles.headerDarkGray}>
					<Text>Eyes </Text>
				</Col>
				<Col cols={2} style={styles.headerLightGray}>
					<Text>Conjunctiva</Text>
				</Col>

				<Col cols={8}>
					<SimpleQuestion
						options={["pale", "not pale"]}
						checked={generalExamination.eyesConjuctive}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ eyesConjuctive: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col cols={2} style={styles.headerDarkGray}>
					<Text>ENT </Text>
				</Col>

				<Col cols={10}>
					<FitTextToCell>
						<Input
							text={generalExamination.ent}
							setText={(text) => {
								setGeneralExamination({ ent: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col cols={2} style={styles.headerDarkGray}>
					<Text>Mouth </Text>
				</Col>
				<Col cols={2}>
					<Text>Outside : </Text>
					<SimpleQuestion
						options={["Angular stomatitis", "Ulcerations"]}
						horizontal={false}
						checked={generalExamination.mouthOutside}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ mouthOutside: text });
						}}
						mutiple={true}
					/>
				</Col>

				<Col cols={8}>
					<Text>Inside : </Text>
					<SimpleQuestion
						options={[
							"Ulcerations",
							"Glossitis",
							"Bleeding gums",
							"White lesions",
							"Red lesions",
							"Cyanosis",
						]}
						checked={generalExamination.mouthInside}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ mouthInside: text });
						}}
						mutiple={true}
					/>
				</Col>
			</Row>
			<Col style={styles.headerDarkGray}>
				<Text>Hands </Text>
			</Col>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Finger clubbing </Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={generalExamination.handsFingerClubbing}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({
								handsFingerClubbing: text,
							});
						}}
					/>
				</Col>

				<Col style={styles.headerLightGray}>
					<Text>Palmar pallor</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={generalExamination.handsPalmerPallor}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ handsPalmerPallor: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Peripheral cyanosis </Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={generalExamination.handsPeripheralCyanosis}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({
								handsPeripheralCyanosis: text,
							});
						}}
					/>
				</Col>

				<Col style={styles.headerLightGray}>
					<Text>Capillary refill time</Text>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							placeholder="Secs"
							text={generalExamination.handsCapillaryRefillTime}
							setText={(text) => {
								setGeneralExamination({
									handsCapillaryRefillTime: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Col style={styles.headerDarkGray}>
				<Text>Other </Text>
			</Col>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Tonsils </Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={generalExamination.tonsils}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ tonsils: text });
						}}
					/>
				</Col>

				<Col style={styles.headerLightGray}>
					<Text>Central Cyanosis</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={generalExamination.centralCyanosis}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ centralCyanosis: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col cols={3} style={styles.headerLightGray}>
					<Text>Skin Pinch Test </Text>
				</Col>
				<Col cols={9}>
					<SimpleQuestion
						options={["slow", "medium", "normal"]}
						checked={generalExamination.skinPinchTest}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ skinPinchTest: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col cols={3} style={styles.headerLightGray}>
					<Text>Lower limb edema </Text>
				</Col>
				<Col cols={9}>
					<SimpleQuestion
						options={["Yes", "No"]}
						checked={generalExamination.lowerLimbEdema}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ lowerLimbEdema: text });
						}}
					/>
					<Text style={{ marginTop: 12, marginLeft: 10 }}>
						If Yes,
					</Text>
					<SimpleQuestion
						options={["Pitting", "Non-pitting"]}
						checked={generalExamination.ifLowerLimbeEdemaYes}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({
								ifLowerLimbeEdemaYes: text,
							});
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col cols={1} style={styles.headerDarkGray}>
					<Text>Lymph Nodes </Text>
				</Col>
				<Col cols={11}>
					{/* still not sure about the input for the second argument below according to the from */}
					<SimpleQuestion
						options={[
							"Non palpable ",
							"Palpable Right/Left group of:",
						]}
						checked={generalExamination.lymphNodes}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setGeneralExamination({ lymphNodes: text });
						}}
					/>
				</Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Respiratory Examination </Text>
			</Col>
			<Row>
				<Col>
					<Text>When looking at the chest, is it:</Text>
					<SimpleQuestion
						options={[
							"Normal",
							"Barrel",
							"Intercostal recession",
							"Chest indrawing",
						]}
						horizontal={false}
						checked={respiratoryExamination.chestLook}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setRespiratoryExamination({ chestLook: text });
						}}
						mutiple={true}
					/>
				</Col>
				<Col>
					<Row>
						<Col style={styles.headerDarkGray}>
							<Text>Auscultation</Text>
						</Col>
					</Row>
					<Row>
						<Col style={styles.headerLightGray}>
							<Text>Air Entry</Text>
						</Col>
						<Col>
							<SimpleQuestion
								options={["Normal", "Diminished"]}
								// horizontal={false}
								checked={respiratoryExamination.airEntry}
								setChecked={(text) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });
									setRespiratoryExamination({
										airEntry: text,
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={styles.headerLightGray}>
							<Text>Breath sounds</Text>
						</Col>
						<Col>
							<SimpleQuestion
								options={[
									"Bronchovesicular",
									"Bronchial",
									"Vesicular",
								]}
								horizontal={false}
								checked={respiratoryExamination.breathSounds}
								setChecked={(text) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });
									setRespiratoryExamination({
										breathSounds: text,
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={styles.headerLightGray}>
							<Text>Crackles</Text>
						</Col>
						<Col>
							<SimpleQuestion
								options={["yes", "no"]}
								checked={respiratoryExamination.crackles}
								setChecked={(text) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });
									setRespiratoryExamination({
										crackles: text,
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={styles.headerLightGray}>
							<Text>Wheezing</Text>
						</Col>
						<Col>
							<SimpleQuestion
								options={["yes", "no"]}
								checked={respiratoryExamination.wheezing}
								setChecked={(text) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });
									setRespiratoryExamination({
										wheezing: text,
									});
								}}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Col style={styles.headerDarkGray}>
				<Text>Abdominal Examination </Text>
			</Col>
			<Row>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						label="Are there any masses on the abdomen? (If yes,
please indicate the location in the picture.)"
						checked={abdominalExamination.masses}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setAbdominalExamination({ masses: text });
						}}
					/>

					<SimpleQuestion
						options={["yes", "no"]}
						label="Is there tenderness? (If yes, please indicate
              location.)"
						checked={abdominalExamination.tenderness}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setAbdominalExamination({ tenderness: text });
						}}
					/>

					<SimpleQuestion
						options={["yes", "no"]}
						label="Is there any rebound tenderness?"
						checked={abdominalExamination.reboundTenderness}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setAbdominalExamination({
								reboundTenderness: text,
							});
						}}
					/>

					<SimpleQuestion
						options={["yes", "no"]}
						label="Any rectal prolapse?"
						checked={abdominalExamination.rectalProlapse}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setAbdominalExamination({ rectalProlapse: text });
						}}
					/>
					<Spacer size={12} />
					{/* <Text>:</Text> */}
					<Input
						label="Anal examination (e.g.; if pinworms observed)"
						text={abdominalExamination.analExamination}
						setText={(text) => {
							setAbdominalExamination({ analExamination: text });
						}}
					/>
				</Col>
				<Col>
					<SimpleQuestion
						options={[
							"Upper Left",
							"Lower Left",
							"Lower Right",
							"Upper Right",
						]}
						label="Abdomen Section"
						horizontal={false}
						checked={abdominalExamination.abdomenSection}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setAbdominalExamination({ abdomenSection: text });
						}}
					/>
				</Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Skin </Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Is there a skin lesion?</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={skinExamination.lession}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setSkinExamination({ lession: text });
						}}
					/>
				</Col>
				<Col cols={2}>
					<Text>If yes, where is the lesion?</Text>
					<Input
						text={skinExamination.lessionRegion}
						setText={(text) => {
							setSkinExamination({ lessionRegion: text });
						}}
					/>
					<Text>Shape of lesion:</Text>
					<Input
						text={skinExamination.lessionShape}
						setText={(text) => {
							setSkinExamination({ lessionShape: text });
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						options={["Multiple", "Single lesion"]}
						checked={skinExamination.lessionFrequency}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setSkinExamination({ lessionFrequency: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col>
					<SimpleQuestion
						options={[
							"Rash",
							"Weal",
							"Bump",
							"Ringworm",
							"Rose spots",
							"Burn",
							"Other",
						]}
						label="Type : "
						checked={skinExamination.type}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setSkinExamination({ type: text });
						}}
					/>

					{/* show this only when other is selected */}
					<Input
						text={skinExamination.typeOther}
						setText={(text) => {
							setSkinExamination({ typeOther: text });
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						options={["Defined", "Undefined"]}
						label="Margins : "
						checked={skinExamination.margins}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setSkinExamination({ margins: text });
						}}
					/>
				</Col>
				<Col>
					<SimpleQuestion
						options={[
							"Bleeding",
							"Pruritic",
							"Worsens at night",
							"Colored:",
						]}
						checked={skinExamination.feature}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setSkinExamination({ feature: text });
						}}
					/>
					<Input
						label="If Colored, specify the color here : "
						text={skinExamination.featureColor}
						setText={(text) => {
							setSkinExamination({ featureColor: text });
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						options={[
							"Another household member with similar problem",
						]}
						checked={skinExamination.houseHoldWithSimilarProblem}
						setChecked={(text) => {
							// console.log("Hello There ", text);
							// setGeneral({ fever: text, ...general });
							setSkinExamination({
								houseHoldWithSimilarProblem: text,
							});
						}}
						// horizontal={false}
					/>
				</Col>
			</Row>
			<Col>
				<FitTextToCell>
					<Input
						label="Other information : "
						text={skinExamination.notes}
						setText={(text) => {
							setSkinExamination({ notes: text });
						}}
					/>
				</FitTextToCell>
			</Col>
			<Col style={styles.headerDarkGray}>
				<Text>Neurological Examination</Text>
			</Col>

			{/* the inputs for this parts are not clear */}
			{/* might need to be updated */}
			<Row>
				<Col>
					<Row>
						<Col style={styles.headerLightGray}>
							<Text>GCS Score:</Text>
							<Input
								label="/15"
								text={neurologicalExamination.gcsScore}
								setText={(text) => {
									setNeurologicalExamination({
										gcsScore: text,
									});
								}}
								disabled={true}
							/>
						</Col>
						<Col>
							<Text>Eyes:</Text>
							<Input
								placeholder="/4"
								text={neurologicalExamination.gcsScoreEyes}
								setText={(text) => {
									setNeurologicalExamination({
										gcsScoreEyes: text,
									});
								}}
							/>
						</Col>
						<Col>
							<Text>Verbal:</Text>
							<Input
								placeholder="/5"
								text={neurologicalExamination.gcsScoreVerbal}
								setText={(text) => {
									setNeurologicalExamination({
										gcsScoreVerbal: text,
									});
								}}
							/>
						</Col>
						<Col>
							<Text>Motor:</Text>
							<Input
								placeholder="/6"
								text={neurologicalExamination.gcsScoreMotor}
								setText={(text) => {
									setNeurologicalExamination({
										gcsScoreMotor: text,
									});
								}}
							/>
						</Col>
					</Row>

					<Row>
						<Col style={styles.headerLightGray}>
							<Text>Blantyre Score (if non verbal):</Text>
							<Input
								placeholder="/5"
								text={neurologicalExamination.blantyreScore}
								setText={(text) => {
									setNeurologicalExamination({
										blantyreScore: text,
									});
								}}
							/>
						</Col>
						<Col>
							<Text>Eyes:</Text>
							<Input
								placeholder="/1"
								text={neurologicalExamination.blantyreScoreEyes}
								setText={(text) => {
									setNeurologicalExamination({
										blantyreScoreEyes: text,
									});
								}}
							/>
						</Col>
						<Col>
							<Text>Verbal:</Text>
							<Input
								placeholder="/2"
								text={
									neurologicalExamination.blantyreScoreVerbal
								}
								setText={(text) => {
									setNeurologicalExamination({
										blantyreScoreVerbal: text,
									});
								}}
							/>
						</Col>
						<Col>
							<Text>Motor:</Text>
							<Input
								placeholder="/3"
								text={
									neurologicalExamination.blantyreScoreMotor
								}
								setText={(text) => {
									setNeurologicalExamination({
										blantyreScoreMotor: text,
									});
								}}
							/>
						</Col>
					</Row>

					<Row>
						<Col style={styles.headerLightGray}>
							<Text>Neck rigidity:</Text>
						</Col>
						<Col cols={3}>
							<SimpleQuestion
								options={["Rigid", "Supple"]}
								// horizontal={false}
								checked={neurologicalExamination.neckRigidigty}
								setChecked={(text) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });
									setNeurologicalExamination({
										neckRigidigty: text,
									});
								}}
							/>
						</Col>
					</Row>
				</Col>
				<Col>
					<Col style={[styles.headerLightGray]}>
						<Text>If neonate:</Text>
					</Col>

					<Col>
						<SimpleQuestion
							options={[
								"Babinski’s sign",
								"Moro’s reflex",
								"Palmar grasp",
							]}
							// horizontal={false}

							checked={neurologicalExamination.neonate}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({ neonate: text });
							}}
						/>
					</Col>

					<Row style={{ flex: 4 }}>
						<Col style={styles.headerLightGray}>
							<Text>Motor flexion : </Text>
						</Col>

						<Col style={{}}>
							<SimpleQuestion
								options={[
									"Normal",
									"Hyporeflexed",
									"Hyper reflexed",
								]}
								horizontal={false}
								checked={neurologicalExamination.motorFlexion}
								setChecked={(text) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });
									setNeurologicalExamination({
										motorFlexion: text,
									});
								}}
							/>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Gait </Text>
				</Col>

				<Col cols={7}>
					<FitTextToCell>
						<Input
							text={neurologicalExamination.gait}
							setText={(text) => {
								setNeurologicalExamination({ gait: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>
			<Col style={{ backgroundColor: "black" }}>
				<Text style={{ color: "white", fontStyle: "italic" }}>
					Do not fill below if neonate:
				</Text>
			</Col>

			<Row>
				<Col>
					<Text></Text>
				</Col>

				<Col>
					<Text style={{ fontWeight: "bold" }}>Right</Text>
				</Col>

				<Col>
					<Text style={{ fontWeight: "bold" }}>Left</Text>
				</Col>
			</Row>

			<Row>
				<Col>
					<Row>
						<Col style={styles.headerDarkGray}>
							<Text>Upper Limbs</Text>
						</Col>

						{/* to move to component for fixing padding defaults for cols */}

						<Col style={styles.removePadding}>
							<Col style={styles.headerLightGray}>
								<Text>Sensation</Text>
							</Col>
							<Col style={styles.headerLightGray}>
								<Text>Power</Text>
							</Col>
							<Col style={styles.headerLightGray}>
								<Text>Muscle tone</Text>
							</Col>
							<Col style={styles.headerLightGray}>
								<Text>Reflexes</Text>
							</Col>
						</Col>
					</Row>
				</Col>

				<Col>
					<Col>
						<SimpleQuestion
							options={["Normal", "Diminished"]}
							checked={
								neurologicalExamination.rightUpperLimbsSensation
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									rightUpperLimbsSensation: text,
								});
							}}
						/>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.rightUpperLimbsPower
								}
								setText={(text) => {
									setNeurologicalExamination({
										rightUpperLimbsPower: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.rightUpperLimbsMuscleTone
								}
								setText={(text) => {
									setNeurologicalExamination({
										rightUpperLimbsMuscleTone: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<SimpleQuestion
							options={[
								"Normal",
								"Hyporeflexive",
								"Hypereflexive",
							]}
							checked={
								neurologicalExamination.rightUpperLimbsReflexes
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									rightUpperLimbsReflexes: text,
								});
							}}
						/>
					</Col>
				</Col>

				<Col>
					<Col>
						<SimpleQuestion
							options={["Normal", "Diminished"]}
							checked={
								neurologicalExamination.leftUpperLimbsSensation
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									leftUpperLimbsSensation: text,
								});
							}}
						/>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.leftUpperLimbsPower
								}
								setText={(text) => {
									setNeurologicalExamination({
										leftUpperLimbsPower: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.lefttUpperLimbsMuscleTone
								}
								setText={(text) => {
									setNeurologicalExamination({
										lefttUpperLimbsMuscleTone: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<SimpleQuestion
							options={[
								"Normal",
								"Hyporeflexive",
								"Hypereflexive",
							]}
							checked={
								neurologicalExamination.lefttUpperLimbsReflexes
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									lefttUpperLimbsReflexes: text,
								});
							}}
						/>
					</Col>
				</Col>
			</Row>

			<Row>
				<Col>
					<Row>
						<Col style={styles.headerDarkGray}>
							<Text>Lower Limbs</Text>
						</Col>
						<Col style={styles.removePadding}>
							<Col style={styles.headerLightGray}>
								<Text>Sensation</Text>
							</Col>
							<Col style={styles.headerLightGray}>
								<Text>Power</Text>
							</Col>
							<Col style={styles.headerLightGray}>
								<Text>Muscle tone</Text>
							</Col>
							<Col style={styles.headerLightGray}>
								<Text>Reflexes</Text>
							</Col>
						</Col>
					</Row>
				</Col>

				<Col>
					<Col>
						<SimpleQuestion
							options={["Normal", "Diminished"]}
							checked={
								neurologicalExamination.rightLowerLimbsSensation
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									rightLowerLimbsSensation: text,
								});
							}}
						/>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.rightLowerLimbsPower
								}
								setText={(text) => {
									setNeurologicalExamination({
										rightLowerLimbsPower: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.rightLowerLimbsMuscleTone
								}
								setText={(text) => {
									setNeurologicalExamination({
										rightLowerLimbsMuscleTone: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<SimpleQuestion
							options={[
								"Normal",
								"Hyporeflexive",
								"Hypereflexive",
							]}
							checked={
								neurologicalExamination.rightLowerLimbsReflexes
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									rightLowerLimbsReflexes: text,
								});
							}}
						/>
					</Col>
				</Col>

				<Col>
					<Col>
						<SimpleQuestion
							options={["Normal", "Diminished"]}
							checked={
								neurologicalExamination.leftLowerLimbsSensation
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									leftLowerLimbsSensation: text,
								});
							}}
						/>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.leftLowerLimbsPower
								}
								setText={(text) => {
									setNeurologicalExamination({
										leftLowerLimbsPower: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<FitTextToCell>
							<Input
								placeholder="/5"
								text={
									neurologicalExamination.leftLowerLimbsMuscleTone
								}
								setText={(text) => {
									setNeurologicalExamination({
										leftLowerLimbsMuscleTone: text,
									});
								}}
							/>
						</FitTextToCell>
					</Col>
					<Col>
						<SimpleQuestion
							options={[
								"Normal",
								"Hyporeflexive",
								"Hypereflexive",
							]}
							checked={
								neurologicalExamination.leftLowerLimbsReflexes
							}
							setChecked={(text) => {
								// console.log("Hello There ", text);
								// setGeneral({ fever: text, ...general });
								setNeurologicalExamination({
									leftLowerLimbsReflexes: text,
								});
							}}
						/>
					</Col>
				</Col>
			</Row>
			<Col>
				<Text>Cranial Nerves</Text>
				<SimpleQuestion
					options={["All intact", "Abnormal: Cranial nerve (s) "]}
					checked={neurologicalExamination.cranialNerves}
					setChecked={(text) => {
						// console.log("Hello There ", text);
						// setGeneral({ fever: text, ...general });
						setNeurologicalExamination({ cranialNerves: text });
					}}
				/>
				<Input
					label="number(1-12)"
					text={neurologicalExamination.cranialNervesNumber}
					setText={(text) => {
						setNeurologicalExamination({
							cranialNervesNumber: text,
						});
					}}
				/>
				<Spacer size={8} />

				{/* the following component state is not handled  */}
				<Input
					label="If abnormal, patient cannot illicit:"
					text={neurologicalExamination.cannotIllicit}
					setText={(text) => {
						setNeurologicalExamination({
							cannotIllicit: text,
						});
					}}
				/>
			</Col>
		</Table>
	);
}
