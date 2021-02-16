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
				<Col style={styles.headerLightGray}>
					<Text>Fever</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={general.fever}
						setChecked={(text: string | string[]) => {
							updateGeneralState({ fever: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							text={general.feverDays}
							setText={(text: string) => {
								updateGeneralState({ feverDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Chills</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={general.chills}
						setChecked={(text: string | string[]) => {
							console.log("Hello There ", text);
							updateGeneralState({ chills: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={general.chillsDays}
							setText={(text: string) => {
								updateGeneralState({ chillsDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Awereness of Heartbeat</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={general.awarenessOfHeartbeat}
						setChecked={(text: string | string[]) => {
							updateGeneralState({
								awarenessOfHeartbeat: text as string,
							});
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={general.awarenessOfHeartbeatDays}
							setText={(text: string) =>
								updateGeneralState({
									awarenessOfHeartbeatDays: text,
								})
							}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Skin Lesion</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={general.skinLesion}
						setChecked={(text: string | string[]) => {
							updateGeneralState({
								skinLesion: text as string,
							});
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={general.skinLesionDays}
							setText={(text: string) => {
								updateGeneralState({
									skinLesionDays: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Respiratory</Text>
			</Col>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Cough</Text>
				</Col>

				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.cough}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ cough: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.coughDays}
							setText={(text: string) => {
								updateRespiratory({ coughDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>

				<Col cols={3.3}>
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
				<Col style={styles.headerLightGray}>
					<Text>Rhinorrhea</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.rhinorrhea}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ rhinorrhea: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.rhinorrheaDays}
							setText={(text: string) => {
								updateRespiratory({ rhinorrheaDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Sneezing</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.sneezing}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ sneezing: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.sneezingDays}
							setText={(text: string) => {
								updateRespiratory({ sneezingDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Loss of Smell</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.lossOfSmell}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ lossOfSmell: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.lossOfSmellDays}
							setText={(text: string) => {
								updateRespiratory({ lossOfSmellDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Loss of Voice</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.lossOfVoice}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ lossOfVoice: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.lossOfVoiceDays}
							setText={(text: string) => {
								updateRespiratory({ lossOfVoiceDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Change in Voice</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.changeInVoice}
						setChecked={(text: string | string[]) => {
							updateRespiratory({
								changeInVoice: text as string,
							});
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.changeInVoiceDays}
							setText={(text: string) => {
								updateRespiratory({ changeInVoiceDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Facial Pain</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.facialPain}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ facialPain: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.facialPainDays}
							setText={(text: string) => {
								updateRespiratory({ facialPainDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Dental pain</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.dentalPain}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ dentalPain: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.dentalPainDays}
							setText={(text: string) => {
								updateRespiratory({ dentalPainDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Nasal Congestion</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.nasalCongestion}
						setChecked={(text: string | string[]) => {
							updateRespiratory({
								nasalCongestion: text as string,
							});
						}}
					/>
				</Col>
				<Col style={styles.headerLightGray}>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.nasalCongestionDays}
							setText={(text: string) => {
								updateRespiratory({
									nasalCongestionDays: text,
								});
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Bad breath</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.badBreath}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ badBreath: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.badBreathDays}
							setText={(text: string) => {
								updateRespiratory({ badBreathDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col style={styles.headerLightGray}>
					<Text>Chest tightness</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.chestTightness}
						setChecked={(text: string | string[]) => {
							updateRespiratory({
								chestTightness: text as string,
							});
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.chestTightnessDays}
							setText={(text: string) => {
								updateRespiratory({ chestTightnessDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Chest pain</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={respiratory.chestPain}
						setChecked={(text: string | string[]) => {
							updateRespiratory({ chestPain: text as string });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={respiratory.chestPainDays}
							setText={(text: string) => {
								updateRespiratory({ chestPainDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>

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
				<Text>GI</Text>
			</Col>
			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Vomiting</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.vomiting}
						setChecked={(text: string | string[]) => {
							updateGI({ vomiting: text });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={gi.vomitingDays}
							setText={(text) => {
								updateGI({ vomitingDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col cols={3.3}>
					<Text>Type : </Text>
					<SimpleQuestion
						options={["Food", "Bile", "Blood"]}
						checked={gi.vomitingType}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ vomitingType: text });
						}}
						mutiple={true}
					/>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Diarrhoea</Text>
				</Col>
				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.diarrhoea}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ diarrhoea: text });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="#Times / Days"
							placeholder="#Times / Days"
							text={gi.diarrhoeaTimesDay}
							setText={(text) => {
								updateGI({ diarrhoeaTimesDay: text });
							}}
						/>
						<Spacer size={10} />
						<Input
							label="Days"
							placeholder="Days"
							text={gi.diarrhoeaDays}
							setText={(text) => {
								updateGI({ diarrhoeaDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col cols={3.3}>
					<Text>Type : </Text>
					<SimpleQuestion
						options={["Watery", "Rice Walter", "Normal", "Hard"]}
						checked={gi.diarrhoeaType}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ diarrhoeaType: text });
						}}
						mutiple={true}
					/>

					<Text>Is bloody ? : </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.isDiarrhoeaBloody}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ isDiarrhoeaBloody: text });
						}}
					/>

					<Text>Any Tenesmus ? : </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.anyTenesmus}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ anyTenesmus: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<Col style={styles.headerLightGray}>
					<Text>Abdominal Pain</Text>
				</Col>

				<Col>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.abdominalPain}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ abdominalPain: text });
						}}
					/>
				</Col>
				<Col>
					<FitTextToCell>
						<Input
							label="Days"
							placeholder="Days"
							text={gi.abdominalPainDays}
							setText={(text) => {
								updateGI({ abdominalPainDays: text });
							}}
						/>
					</FitTextToCell>
				</Col>
				<Col cols={3.3}>
					<Text>Location : </Text>
					<SimpleQuestion
						options={["Epigastric", "Umbilical", "Hypogastric"]}
						checked={gi.abdominalPainLocation}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ abdominalPainLocation: text });
						}}
					/>

					<Text>If Epigastric, is it before or after meals? : </Text>
					<SimpleQuestion
						options={["before", "after"]}
						checked={gi.abdominalPainEpigastric}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ abdominalPainEpigastric: text });
						}}
						mutiple={true}
					/>

					<Text>Does it radiate to the back? ? : </Text>
					<SimpleQuestion
						options={["yes", "no"]}
						checked={gi.abdominalPainRadiatingBack}
						setChecked={(text) => {
							// console.log('Hello There ', text);
							// setGeneral({ fever: text, ...general });
							updateGI({ abdominalPainRadiatingBack: text });
						}}
					/>
				</Col>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Abdominal Cramps"
					onChange={(res) => {
						// console.log("What does : ", res);
						updateGI({
							abdominalCramps: res.checked,
							abdominalCrampsDays: res.days,
						});
					}}
				/>
				<BasicSymptomInput
					label="Lack of appetite"
					onChange={(res) => {
						// console.log("What does : ", res);
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
						// console.log("What does : ", res);
						updateGI({
							weightLoss: res.checked,
							weightLossDays: res.days,
						});
					}}
				/>
				<BasicSymptomInput
					label="Difficulty swallowing"
					onChange={(res) => {
						// console.log("What does : ", res);
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
						// console.log("What does : ", res);
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
						// console.log("What does : ", res);
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
					// times={true}
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
					// times={true}
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
					// times={true}
					onChange={(res) => {
						// console.log("What does : ", res);
						updateEarsAndEyes({
							redEyes: res.checked,
							redEyesDays: res.days,
							// frequencyOfUrinationTimesDay: res.timesDay,
						});
					}}
				/>

				<BasicSymptomInput
					label="Painful Eyes"
					// times={true}
					onChange={(res) => {
						updateEarsAndEyes({
							painfulEyes: res.checked,
							painfulEyesDays: res.days,
							// frequencyOfUrinationTimesDay: res.timesDay,
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
					// times={true}
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
					// times={true}
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
							// frequencyOfUrinationTimesDay: res.timesDay,
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
					// times={true}
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
