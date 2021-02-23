import React from "react";
import {
	useGeneralSymptoms,
	useRespiratory,
	useGI,
	useCNS,
	useMusculoskeletal,
	useEarsAndEyes,
	useMouth,
	useNeonatal,
	useOthers,
} from "../store";
import {
	Table,
	Col,
	Row,
	SimpleQuestion,
	FitTextToCell,
	Input,
	Spacer,
	BasicSymptomInput,
} from ".";
import { styles } from "../style";
import { Text, View } from "react-native";

export function Symptoms() {
	const { updateGeneralState, ...general } = useGeneralSymptoms(
		(state) => state
	);
	//respiratory sypmtoms
	const { updateRespiratory, ...respiratory } = useRespiratory(
		(state) => state
	);

	//GI sypmtoms
	const { updateGI, ...gi } = useGI((state) => state);

	// CNS symptoms
	const { updateCNS, ...cns } = useCNS((state) => state);

	// musculoskeletal symptoms
	const { updateMusculoskeletal, ...musculoskeletal } = useMusculoskeletal(
		(state) => state
	);

	//eyes and ear symptoms
	const { updateEarsAndEyes, ...earsAndEyes } = useEarsAndEyes(
		(state) => state
	);

	//mouth symptoms
	const { updateMouth, ...mouth } = useMouth((state) => state);

	//mouth symptoms
	const { updateNeonatal, ...neonatal } = useNeonatal((state) => state);

	//others symotoms
	const { updateOthers, ...others } = useOthers((state) => state);

	return (
		<Table headerTitle="Symptoms">
			<Col style={styles.headerDarkGray}>
				<Text>General</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Fever"
					onChange={(res) => {
						updateGeneralState({
							fever: res.checked,
							feverDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Chills"
					onChange={(res) => {
						updateGeneralState({
							chills: res.checked,
							chillsDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Awereness of Heartbeat"
					onChange={(res) => {
						updateGeneralState({
							awarenessOfHeartbeat: res.checked,
							awarenessOfHeartbeatDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Skin Lesion"
					onChange={(res) => {
						updateGeneralState({
							skinLesion: res.checked,
							skinLesionDays: res.days,
						});
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Respiratory</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Cough"
					onChange={(res) => {
						updateRespiratory({
							cough: res.checked,
							coughDays: res.days,
						});
					}}
				/>

				<Col cols={3.28}>
					<Row>
						<SimpleQuestion
							options={["Wet", "Dry"]}
							checked={respiratory.coughNature}
							setChecked={(text: string | string[]) => {
								updateRespiratory({
									coughNature: text as string,
								});
							}}
						/>
					</Row>
					<Spacer size={4} />
					<Text>If productive, what is sputum color:</Text>
					<Row>
						<SimpleQuestion
							options={["Red", "green", "white", "clear"]}
							checked={respiratory.coughSpatum}
							setChecked={(text: string | string[]) => {
								updateRespiratory({
									coughSpatum: text as string,
								});
							}}
						/>
					</Row>
					<Spacer size={4} />
					<Text>Time </Text>
					<Row>
						<SimpleQuestion
							options={["morning", "night", "whole day", "clear"]}
							checked={respiratory.coughTime}
							setChecked={(text: string | string[]) => {
								updateRespiratory({
									coughTime: text as string,
								});
							}}
						/>
					</Row>
				</Col>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Rhinorrhea"
					onChange={(res) => {
						updateRespiratory({
							rhinorrhea: res.checked,
							rhinorrheaDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Sneezing"
					onChange={(res) => {
						updateRespiratory({
							sneezing: res.checked,
							sneezingDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Loss of Smell"
					onChange={(res) => {
						updateRespiratory({
							lossOfSmell: res.checked,
							lossOfSmellDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Loss of Voice"
					onChange={(res) => {
						updateRespiratory({
							lossOfVoice: res.checked,
							lossOfVoiceDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Change in Voice"
					onChange={(res) => {
						updateRespiratory({
							changeInVoice: res.checked,
							changeInVoiceDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Facial Pain"
					onChange={(res) => {
						updateRespiratory({
							facialPain: res.checked,
							facialPainDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Dental pain"
					onChange={(res) => {
						updateRespiratory({
							dentalPain: res.checked,
							dentalPainDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Nasal Congestion"
					onChange={(res) => {
						updateRespiratory({
							nasalCongestion: res.checked,
							nasalCongestionDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Bad breath"
					onChange={(res) => {
						updateRespiratory({
							badBreath: res.checked,
							badBreathDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Chest tightness"
					onChange={(res) => {
						updateRespiratory({
							chestTightness: res.checked,
							chestTightnessDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Chest pain"
					onChange={(res) => {
						updateRespiratory({
							chestPain: res.checked,
							chestPainDays: res.days,
						});
					}}
				/>

				<Col></Col>
				<Col></Col>
				<Col></Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>GI</Text>
			</Col>
			<Row>
				<BasicSymptomInput
					label="Vomiting"
					onChange={(res) => {
						updateGI({
							vomiting: res.checked,
							vomitingDays: res.days,
						});
					}}
				/>

				<Col cols={3.3}>
					<Text>Type : </Text>
					<SimpleQuestion
						options={["Food", "Bile", "Blood"]}
						checked={gi.vomitingType}
						setChecked={(text) => {
							updateGI({ vomitingType: text });
						}}
						mutiple={true}
					/>
				</Col>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Diarrhoea"
					times={true}
					onChange={(res) => {
						updateGI({
							diarrhoea: res.checked,
							diarrhoeaDays: res.days,
							diarrhoeaTimesDay: res.timesDay,
						});
					}}
				/>

				<Col cols={3.3}>
					<Text>Type : </Text>
					<SimpleQuestion
						options={["Watery", "Rice Water", "Normal", "Hard"]}
						checked={gi.diarrhoeaType}
						setChecked={(text) => {
							updateGI({ diarrhoeaType: text });
						}}
						mutiple={true}
					/>

					<Text>Is bloody ? : </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.isDiarrhoeaBloody}
						setChecked={(text) => {
							updateGI({ isDiarrhoeaBloody: text });
						}}
					/>

					<Text>Any Tenesmus ? : </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.anyTenesmus}
						setChecked={(text) => {
							updateGI({ anyTenesmus: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Abdominal Pain"
					onChange={(res) => {
						updateGI({
							abdominalPain: res.checked,
							abdominalPainDays: res.days,
						});
					}}
				/>

				<Col cols={3.3}>
					<Text>Location : </Text>
					<SimpleQuestion
						options={["Epigastric", "Umbilical", "Hypogastric"]}
						checked={gi.abdominalPainLocation}
						setChecked={(text) => {
							updateGI({ abdominalPainLocation: text });
						}}
					/>

					<Text>If Epigastric, is it before or after meals? : </Text>
					<SimpleQuestion
						options={["before", "after"]}
						checked={gi.abdominalPainEpigastric}
						setChecked={(text) => {
							updateGI({ abdominalPainEpigastric: text });
						}}
						mutiple={true}
					/>

					<Text>Does it radiate to the back? ? : </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.abdominalPainRadiatingBack}
						setChecked={(text) => {
							updateGI({ abdominalPainRadiatingBack: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Abdominal Cramps"
					onChange={(res) => {
						updateGI({
							abdominalCramps: res.checked,
							abdominalCrampsDays: res.days,
						});
					}}
				/>
				<BasicSymptomInput
					label="Lack of appetite"
					onChange={(res) => {
						updateGI({
							lackOfAppetite: res.checked,
							lackOfAppetiteDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Weight Loss"
					onChange={(res) => {
						updateGI({
							weightLoss: res.checked,
							weightLossDays: res.days,
						});
					}}
				/>
				<BasicSymptomInput
					label="Difficulty swallowing"
					onChange={(res) => {
						updateGI({
							difficultySwallowing: res.checked,
							difficultySwallowingDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Pain on urination"
					onChange={(res) => {
						updateGI({
							painOnUrination: res.checked,
							painOnUrinationDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Frequency of urination"
					options={["Incraese", "Decrease"]}
					times={true}
					onChange={(res) => {
						updateGI({
							frequencyOfUrination: res.checked,
							frequencyOfUrinationDays: res.days,
							frequencyOfUrinationTimesPerDay: res.timesDay,
						});
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>CNS</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Headache"
					onChange={(res) => {
						updateCNS({
							headache: res.checked,
							headacheDays: res.days,
						});
					}}
				/>
				<BasicSymptomInput
					label="Coma"
					onChange={(res) => {
						updateCNS({
							coma: res.checked,
							comaDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Hypothermia"
					onChange={(res) => {
						updateCNS({
							hypothermia: res.checked,
							hypothermiaDays: res.days,
						});
					}}
				/>
				<BasicSymptomInput
					label="Seizures"
					onChange={(res) => {
						updateCNS({
							seizures: res.checked,
							seizuresDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Neck Pain"
					onChange={(res) => {
						updateCNS({
							neckPain: res.checked,
							neckPainDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="High pitched crying"
					onChange={(res) => {
						updateCNS({
							highPitchedCrying: res.checked,
							highPitchedCryingDays: res.days,
						});
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Musculoskeletal</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Myalgia"
					onChange={(res) => {
						updateMusculoskeletal({
							myalgia: res.checked,
							myalgiaDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="History of Trauma"
					onChange={(res) => {
						updateMusculoskeletal({
							historyOfTrauma: res.checked,
							historyOfTraumaDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Fatigue"
					onChange={(res) => {
						updateMusculoskeletal({
							fatique: res.checked,
							fatiqueDays: res.days,
						});
					}}
				/>
				<Col>
					<Text></Text>
				</Col>
				<Col>
					<Text></Text>
				</Col>
				<Col>
					<Text></Text>
				</Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Eyes and Ears</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Red Eyes"
					onChange={(res) => {
						updateEarsAndEyes({
							redEyes: res.checked,
							redEyesDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Painful Eyes"
					onChange={(res) => {
						updateEarsAndEyes({
							painfulEyes: res.checked,
							painfulEyesDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Ear Pain"
					onChange={(res) => {
						updateEarsAndEyes({
							earPain: res.checked,
							earPainDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Eye Discharge"
					onChange={(res) => {
						updateEarsAndEyes({
							eyeDischarge: res.checked,
							eyeDischargeDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Ear Discharge"
					onChange={(res) => {
						updateEarsAndEyes({
							earDischarge: res.checked,
							earDischargeDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Sunken Eyes"
					onChange={(res) => {
						updateEarsAndEyes({
							sunkenEyes: res.checked,
							sunkenEyesDays: res.days,
						});
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Mouth</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Dryness"
					onChange={(res) => {
						updateMouth({
							dryness: res.checked,
							drynessDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Cotton Feeling"
					onChange={(res) => {
						updateMouth({
							cottonFeeling: res.checked,
							cottonFeelingDays: res.days,
						});
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Ulcerations Inside of Mouth"
					onChange={(res) => {
						updateMouth({
							ulcerationsInside: res.checked,
							ulcerationsInsideDays: res.days,
						});
					}}
				/>

				<BasicSymptomInput
					label="Ulcerations around Mouth/ Corners"
					onChange={(res) => {
						updateMouth({
							ulcerationsAround: res.checked,
							ulcerationsAroundDays: res.days,
						});
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Neonatal Symptoms</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Inability to breastfeed"
					showNumberDays={false}
					onChange={(res: {
						checked?: string | undefined;
						days?: string | undefined;
						timesDay?: string | undefined;
					}) => {
						updateNeonatal({
							inabilityToBreastFeed: res.checked as string,
						});
					}}
				/>
				<Col>
					<Text></Text>
				</Col>
				<Col>
					<Text></Text>
				</Col>
				<Col>
					<Text></Text>
				</Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Other (please add any not above)</Text>
			</Col>

			<Input
				multiline
				numberOfLines={4}
				text={others.others}
				setText={(text: string) => {
					updateOthers({ others: text });
				}}
			/>
		</Table>
	);
}
