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
	const { updateVitalSigns, ...vitalSigns } = useVitalSigns((state) => state);

	const {
		updateGeneralExamination,
		...generalExamination
	} = useGeneralExamination((state) => state);

	const {
		updateRespiratoryExamination,
		...respiratoryExamination
	} = useRespiratoryExamination((state) => state);

	const {
		updateAbdominalExamination,
		...abdominalExamination
	} = useAbdominalExamination((state) => state);

	const { updateSkinExamination, ...skinExamination } = useSkinExamination(
		(state) => state
	);

	const {
		updateNeurologicalExamination,
		...neurologicalExamination
	} = useNeurologicalExamination((state) => state);

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
							setText={(text: string) => {
								updateVitalSigns({ temp: text });
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
							setText={(text: string) => {
								updateVitalSigns({ respRate: text });
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
							setText={(text: string) => {
								updateVitalSigns({ hr: text });
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
							setText={(text: string) => {
								updateVitalSigns({ o2Sat: text });
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
							setText={(text: string) => {
								updateVitalSigns({ bp: text });
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
							setText={(text: string) => {
								updateVitalSigns({ weight: text });
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
							setText={(text: string) => {
								updateVitalSigns({ height: text });
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								mentalStatus: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								childAppearance: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								hairColor: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								hairTexture: text as string,
							});
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
						checked={generalExamination.eyesConjuctiva}
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								eyesConjuctiva: text as string,
							});
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
							setText={(text: string) => {
								updateGeneralExamination({ ent: text });
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
					<SimpleQuestion
						label="Outside :"
						options={["Angular stomatitis", "Ulcerations"]}
						horizontal={false}
						checked={generalExamination.mouthOutside}
						setChecked={(text: string[] | string) => {
							updateGeneralExamination({
								mouthOutside: text as string[],
							});
						}}
						mutiple={true}
					/>
				</Col>

				<Col cols={8}>
					<SimpleQuestion
						label="Inside :"
						options={[
							"Ulcerations",
							"Glossitis",
							"Bleeding gums",
							"White lesions",
							"Red lesions",
							"Cyanosis",
						]}
						checked={generalExamination.mouthInside}
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								mouthInside: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								handsFingerClubbing: text as string,
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
						checked={generalExamination.handsPalmarPallor}
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								handsPalmarPallor: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								handsPeripheralCyanosis: text as string,
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
							setText={(text: string | string[]) => {
								updateGeneralExamination({
									handsCapillaryRefillTime: text as string,
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								tonsils: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								centralCyanosis: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								skinPinchTest: text as string,
							});
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
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								lowerLimbEdema: text as string,
							});
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						label="If Yes"
						options={["Pitting", "Non-pitting"]}
						checked={generalExamination.ifLowerLimbeEdemaYes}
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								ifLowerLimbeEdemaYes: text as string,
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
					<SimpleQuestion
						options={["Non palpable", "Palpable"]}
						checked={generalExamination.lymphNodes}
						setChecked={(text: string | string[]) => {
							updateGeneralExamination({
								lymphNodes: text as string,
							});
						}}
					/>
					<Text>If Palpable ? </Text>
					<Input
						label="Right/Left Group Of"
						text={generalExamination.palpableRightLeftGroupOf}
						setText={(text: string) => {
							updateGeneralExamination({
								palpableRightLeftGroupOf: text,
							});
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
						setChecked={(text: string | string[]) => {
							updateRespiratoryExamination({
								chestLook: text as string[],
							});
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
								checked={respiratoryExamination.airEntry}
								setChecked={(text: string | string[]) => {
									updateRespiratoryExamination({
										airEntry: text as string,
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
								setChecked={(text: string | string[]) => {
									updateRespiratoryExamination({
										breathSounds: text as string,
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
								setChecked={(text: string | string[]) => {
									updateRespiratoryExamination({
										crackles: text as string,
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
								setChecked={(text: string | string[]) => {
									updateRespiratoryExamination({
										wheezing: text as string,
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
						setChecked={(text: string | string[]) => {
							updateAbdominalExamination({
								masses: text as string,
							});
						}}
					/>

					<SimpleQuestion
						options={["yes", "no"]}
						label="Is there tenderness? (If yes, please indicate
              location.)"
						checked={abdominalExamination.tenderness}
						setChecked={(text: string | string[]) => {
							updateAbdominalExamination({
								tenderness: text as string,
							});
						}}
					/>

					<SimpleQuestion
						options={["yes", "no"]}
						label="Is there any rebound tenderness?"
						checked={abdominalExamination.reboundTenderness}
						setChecked={(text: string | string[]) => {
							updateAbdominalExamination({
								reboundTenderness: text as string,
							});
						}}
					/>

					<SimpleQuestion
						options={["yes", "no"]}
						label="Any rectal prolapse?"
						checked={abdominalExamination.rectalProlapse}
						setChecked={(text: string | string[]) => {
							updateAbdominalExamination({
								rectalProlapse: text as string,
							});
						}}
					/>
					<Spacer size={12} />

					<Input
						label="Anal examination (e.g.; if pinworms observed)"
						text={abdominalExamination.analExamination}
						setText={(text: string) => {
							updateAbdominalExamination({
								analExamination: text,
							});
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
						setChecked={(text: string | string[]) => {
							updateAbdominalExamination({
								abdomenSection: text as string,
							});
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
						checked={skinExamination.lesion}
						setChecked={(text: string | string[]) => {
							updateSkinExamination({ lesion: text as string });
						}}
					/>
				</Col>
				<Col cols={2}>
					<Text>If yes, where is the lesion?</Text>
					<Input
						text={skinExamination.lesionRegion}
						setText={(text: string) => {
							updateSkinExamination({ lesionRegion: text });
						}}
					/>
					<Text>Shape of lesion:</Text>
					<Input
						text={skinExamination.lesionShape}
						setText={(text: string) => {
							updateSkinExamination({ lesionShape: text });
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						options={["Multiple", "Single lesion"]}
						checked={skinExamination.lesionFrequency}
						setChecked={(text: string | string[]) => {
							updateSkinExamination({
								lesionFrequency: text as string,
							});
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
						]}
						label="Type : "
						checked={skinExamination.type}
						setChecked={(text: string | string[]) => {
							updateSkinExamination({ type: text as string[] });
						}}
						mutiple={true}
					/>

					<Input
						label="Other"
						text={skinExamination.typeOther}
						setText={(text: string) => {
							updateSkinExamination({ typeOther: text });
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						options={["Defined", "Undefined"]}
						label="Margins : "
						checked={skinExamination.margins}
						setChecked={(text: string | string[]) => {
							updateSkinExamination({ margins: text as string });
						}}
					/>
				</Col>
				<Col>
					<SimpleQuestion
						options={[
							"Bleeding",
							"Pruritic",
							"Worsens at night",
							"Discolored:",
						]}
						checked={skinExamination.feature}
						setChecked={(text: string | string[]) => {
							updateSkinExamination({ feature: text as string });
						}}
						mutiple={true}
					/>
					<Input
						label="If Colored, specify the color here : "
						text={skinExamination.featureColor}
						setText={(text: string) => {
							updateSkinExamination({ featureColor: text });
						}}
					/>
					<Spacer size={8} />
					<SimpleQuestion
						options={[
							"Another household member with similar problem",
						]}
						checked={skinExamination.houseHoldWithSimilarProblem}
						setChecked={(text: string | string[]) => {
							updateSkinExamination({
								houseHoldWithSimilarProblem: text as string,
							});
						}}
					/>
				</Col>
			</Row>
			<Col>
				<FitTextToCell>
					<Input
						label="Other information : "
						text={skinExamination.notes}
						setText={(text: string) => {
							updateSkinExamination({ notes: text });
						}}
					/>
				</FitTextToCell>
			</Col>
			<Col style={styles.headerDarkGray}>
				<Text>Neurological Examination</Text>
			</Col>

			<Row>
				<Col>
					<Row>
						<Col style={styles.headerLightGray}>
							<Text>GCS Score:</Text>
							<Input
								label="/15"
								text={neurologicalExamination.gcsScore}
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								checked={neurologicalExamination.neckRigidity}
								setChecked={(text: string | string[]) => {
									updateNeurologicalExamination({
										neckRigidity: text as string,
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
							checked={neurologicalExamination.neonate}
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									neonate: text as string[],
								});
							}}
							mutiple={true}
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
								setChecked={(text: string | string[]) => {
									updateNeurologicalExamination({
										motorFlexion: text as string,
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
							setText={(text: string) => {
								updateNeurologicalExamination({ gait: text });
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									rightUpperLimbsSensation: text as string,
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									rightUpperLimbsReflexes: text as string,
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									leftUpperLimbsSensation: text as string,
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									lefttUpperLimbsReflexes: text as string,
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									rightLowerLimbsSensation: text as string,
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									rightLowerLimbsReflexes: text as string,
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									leftLowerLimbsSensation: text as string,
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
								setText={(text: string) => {
									updateNeurologicalExamination({
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
							setChecked={(text: string | string[]) => {
								updateNeurologicalExamination({
									leftLowerLimbsReflexes: text as string,
								});
							}}
						/>
					</Col>
				</Col>
			</Row>
			<Col>
				<Text>Cranial Nerves</Text>
				<SimpleQuestion
					options={["All intact", "Abnormal"]}
					checked={neurologicalExamination.cranialNerves}
					setChecked={(text: string | string[]) => {
						updateNeurologicalExamination({
							cranialNerves: text as string,
						});
					}}
				/>
				<Input
					label="Abnormal cranial nerve(s) number (1-12)"
					text={neurologicalExamination.cranialNervesNumber}
					setText={(text: string) => {
						updateNeurologicalExamination({
							cranialNervesNumber: text,
						});
					}}
				/>
				<Spacer size={8} />

				<Input
					label="If abnormal, patient cannot illicit:"
					text={neurologicalExamination.cannotIllicit}
					setText={(text: string) => {
						updateNeurologicalExamination({
							cannotIllicit: text,
						});
					}}
				/>
			</Col>
		</Table>
	);
}
