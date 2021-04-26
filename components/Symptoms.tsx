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
					checked={general.fever}
					setChecked={(checked) => {
						updateGeneralState({ fever: checked });
					}}
					days={general.feverDays}
					setDays={(days) => {
						updateGeneralState({ feverDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Chills"
					checked={general.chills}
					setChecked={(checked) => {
						updateGeneralState({ chills: checked });
					}}
					days={general.chillsDays}
					setDays={(days) => {
						updateGeneralState({ chillsDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Awereness of Heartbeat"
					checked={general.awarenessOfHeartbeat}
					setChecked={(checked) => {
						updateGeneralState({ awarenessOfHeartbeat: checked });
					}}
					days={general.awarenessOfHeartbeatDays}
					setDays={(days) => {
						updateGeneralState({ awarenessOfHeartbeatDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Skin Lesion"
					checked={general.skinLesion}
					setChecked={(checked) => {
						updateGeneralState({ skinLesion: checked });
					}}
					days={general.skinLesionDays}
					setDays={(days) => {
						updateGeneralState({ skinLesionDays: days });
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Respiratory</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Cough"
					checked={respiratory.cough}
					setChecked={(checked) => {
						updateRespiratory({ cough: checked });
					}}
					days={respiratory.coughDays}
					setDays={(days) => {
						updateRespiratory({ coughDays: days });
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
					checked={respiratory.rhinorrhea}
					setChecked={(checked) => {
						updateRespiratory({ rhinorrhea: checked });
					}}
					days={respiratory.rhinorrheaDays}
					setDays={(days) => {
						updateRespiratory({ rhinorrheaDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Sneezing"
					checked={respiratory.sneezing}
					setChecked={(checked) => {
						updateRespiratory({ sneezing: checked });
					}}
					days={respiratory.sneezingDays}
					setDays={(days) => {
						updateRespiratory({ sneezingDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Loss of Smell"
					checked={respiratory.lossOfSmell}
					setChecked={(checked) => {
						updateRespiratory({ lossOfSmell: checked });
					}}
					days={respiratory.lossOfSmellDays}
					setDays={(days) => {
						updateRespiratory({ lossOfSmellDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Loss of Voice"
					checked={respiratory.lossOfVoice}
					setChecked={(checked) => {
						updateRespiratory({ lossOfVoice: checked });
					}}
					days={respiratory.lossOfVoiceDays}
					setDays={(days) => {
						updateRespiratory({ lossOfVoiceDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Change in Voice"
					checked={respiratory.changeInVoice}
					setChecked={(checked) => {
						updateRespiratory({ changeInVoice: checked });
					}}
					days={respiratory.changeInVoiceDays}
					setDays={(days) => {
						updateRespiratory({ changeInVoiceDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Facial Pain"
					checked={respiratory.facialPain}
					setChecked={(checked) => {
						updateRespiratory({ facialPain: checked });
					}}
					days={respiratory.facialPainDays}
					setDays={(days) => {
						updateRespiratory({ facialPainDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Dental pain"
					checked={respiratory.dentalPain}
					setChecked={(checked) => {
						updateRespiratory({ dentalPain: checked });
					}}
					days={respiratory.dentalPainDays}
					setDays={(days) => {
						updateRespiratory({ dentalPainDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Nasal Congestion"
					checked={respiratory.nasalCongestion}
					setChecked={(checked) => {
						updateRespiratory({ nasalCongestion: checked });
					}}
					days={respiratory.nasalCongestionDays}
					setDays={(days) => {
						updateRespiratory({ nasalCongestionDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Bad breath"
					checked={respiratory.badBreath}
					setChecked={(checked) => {
						updateRespiratory({ badBreath: checked });
					}}
					days={respiratory.badBreathDays}
					setDays={(days) => {
						updateRespiratory({ badBreathDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Chest tightness"
					checked={respiratory.chestTightness}
					setChecked={(checked) => {
						updateRespiratory({ chestTightness: checked });
					}}
					days={respiratory.chestTightnessDays}
					setDays={(days) => {
						updateRespiratory({ chestTightnessDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Chest pain"
					checked={respiratory.chestPain}
					setChecked={(checked) => {
						updateRespiratory({ chestPain: checked });
					}}
					days={respiratory.chestPainDays}
					setDays={(days) => {
						updateRespiratory({ chestPainDays: days });
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
					checked={gi.vomiting}
					setChecked={(checked) => {
						updateGI({ vomiting: checked });
					}}
					days={gi.vomitingDays}
					setDays={(days) => {
						updateGI({ vomitingDays: days });
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
					checked={gi.diarrhoea}
					setChecked={(checked) => {
						updateGI({ diarrhoea: checked });
					}}
					days={gi.diarrhoeaDays}
					setDays={(days) => {
						updateGI({ diarrhoeaDays: days });
					}}
					timesDay={gi.diarrhoeaTimesDay}
					setTimesDay={(timesPerDay) => {
						updateGI({ diarrhoeaTimesDay: timesPerDay });
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
					checked={gi.abdominalPain}
					setChecked={(checked) => {
						updateGI({ abdominalPain: checked });
					}}
					days={gi.abdominalPainDays}
					setDays={(days) => {
						updateGI({ abdominalPainDays: days });
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
					checked={gi.abdominalCramps}
					setChecked={(checked) => {
						updateGI({ abdominalCramps: checked });
					}}
					days={gi.abdominalCrampsDays}
					setDays={(days) => {
						updateGI({ abdominalCrampsDays: days });
					}}
				/>
				<BasicSymptomInput
					label="Lack of appetite"
					checked={gi.lackOfAppetite}
					setChecked={(checked) => {
						updateGI({ lackOfAppetite: checked });
					}}
					days={gi.lackOfAppetiteDays}
					setDays={(days) => {
						updateGI({ lackOfAppetiteDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Weight Loss"
					checked={gi.weightLoss}
					setChecked={(checked) => {
						updateGI({ weightLoss: checked });
					}}
					days={gi.weightLossDays}
					setDays={(days) => {
						updateGI({ weightLossDays: days });
					}}
				/>
				{/* TODO: Starting here (delete comment) */}
				<BasicSymptomInput
					label="Difficulty swallowing"
					checked={gi.difficultySwallowing}
					setChecked={(checked) => {
						updateGI({ difficultySwallowing: checked });
					}}
					days={gi.difficultySwallowingDays}
					setDays={(days) => {
						updateGI({ difficultySwallowingDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Pain on urination"
					checked={gi.painOnUrination}
					setChecked={(checked) => {
						updateGI({ painOnUrination: checked });
					}}
					days={gi.painOnUrinationDays}
					setDays={(days) => {
						updateGI({ painOnUrinationDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Frequency of urination"
					checked={gi.frequencyOfUrination}
					days={gi.frequencyOfUrinationDays}
					timesDay={gi.frequencyOfUrinationTimesDay}
					options={["Incraese", "Decrease"]}
					times={true}
					checked={gi.frequencyOfUrination}
					setChecked={(checked) => {
						updateGI({ frequencyOfUrination: checked });
					}}
					days={gi.frequencyOfUrinationDays}
					setDays={(days) => {
						updateGI({ frequencyOfUrinationDays: days });
					}}
					timesDay={gi.frequencyOfUrinationTimesPerDay}
					setTimesDay={(timesPerDay) => {
						updateGI({
							frequencyOfUrinationTimesPerDay: timesPerDay,
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
					checked={cns.headache}
					setChecked={(checked) => {
						updateCNS({ headache: checked });
					}}
					days={cns.headacheDays}
					setDays={(days) => {
						updateCNS({ headacheDays: days });
					}}
				/>
				<BasicSymptomInput
					label="Coma"
					checked={cns.coma}
					setChecked={(checked) => {
						updateCNS({ coma: checked });
					}}
					days={cns.comaDays}
					setDays={(days) => {
						updateCNS({ comaDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Hypothermia"
					checked={cns.hypothermia}
					setChecked={(checked) => {
						updateCNS({ hypothermia: checked });
					}}
					days={cns.hypothermiaDays}
					setDays={(days) => {
						updateCNS({ hypothermiaDays: days });
					}}
				/>
				<BasicSymptomInput
					label="Seizures"
					checked={cns.seizures}
					setChecked={(checked) => {
						updateCNS({ seizures: checked });
					}}
					days={cns.seizuresDays}
					setDays={(days) => {
						updateCNS({ seizuresDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Neck Pain"
					checked={cns.neckPain}
					setChecked={(checked) => {
						updateCNS({ neckPain: checked });
					}}
					days={cns.neckPainDays}
					setDays={(days) => {
						updateCNS({ neckPainDays: days });
					}}
				/>

				<BasicSymptomInput
					label="High pitched crying"
					checked={cns.highPitchedCrying}
					setChecked={(checked) => {
						updateCNS({ highPitchedCrying: checked });
					}}
					days={cns.highPitchedCryingDays}
					setDays={(days) => {
						updateCNS({ highPitchedCryingDays: days });
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Musculoskeletal</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Myalgia"
					checked={musculoskeletal.myalgia}
					setChecked={(checked) => {
						updateMusculoskeletal({ myalgia: checked });
					}}
					days={musculoskeletal.myalgiaDays}
					setDays={(days) => {
						updateMusculoskeletal({ myalgiaDays: days });
					}}
				/>

				<BasicSymptomInput
					label="History of Trauma"
					checked={musculoskeletal.historyOfTrauma}
					setChecked={(checked) => {
						updateMusculoskeletal({ historyOfTrauma: checked });
					}}
					days={musculoskeletal.historyOfTraumaDays}
					setDays={(days) => {
						updateMusculoskeletal({ historyOfTraumaDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Fatigue"
					checked={musculoskeletal.fatique}
					setChecked={(checked) => {
						updateMusculoskeletal({ fatique: checked });
					}}
					days={musculoskeletal.fatiqueDays}
					setDays={(days) => {
						updateMusculoskeletal({ fatiqueDays: days });
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
					checked={earsAndEyes.redEyes}
					setChecked={(checked) => {
						updateEarsAndEyes({ redEyes: checked });
					}}
					days={earsAndEyes.redEyesDays}
					setDays={(days) => {
						updateEarsAndEyes({ redEyesDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Painful Eyes"
					checked={earsAndEyes.painfulEyes}
					setChecked={(checked) => {
						updateEarsAndEyes({ painfulEyes: checked });
					}}
					days={earsAndEyes.painfulEyesDays}
					setDays={(days) => {
						updateEarsAndEyes({ painfulEyesDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Ear Pain"
					checked={earsAndEyes.earPain}
					setChecked={(checked) => {
						updateEarsAndEyes({ earPain: checked });
					}}
					days={earsAndEyes.earPainDays}
					setDays={(days) => {
						updateEarsAndEyes({ earPainDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Eye Discharge"
					checked={earsAndEyes.eyeDischarge}
					setChecked={(checked) => {
						updateEarsAndEyes({ eyeDischarge: checked });
					}}
					days={earsAndEyes.eyeDischargeDays}
					setDays={(days) => {
						updateEarsAndEyes({ eyeDischargeDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Ear Discharge"
					checked={earsAndEyes.earDischarge}
					setChecked={(checked) => {
						updateEarsAndEyes({ earDischarge: checked });
					}}
					days={earsAndEyes.earDischargeDays}
					setDays={(days) => {
						updateEarsAndEyes({ earDischargeDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Sunken Eyes"
					checked={earsAndEyes.sunkenEyes}
					setChecked={(checked) => {
						updateEarsAndEyes({ sunkenEyes: checked });
					}}
					days={earsAndEyes.sunkenEyesDays}
					setDays={(days) => {
						updateEarsAndEyes({ sunkenEyesDays: days });
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Mouth</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Dryness"
					checked={mouth.dryness}
					setChecked={(checked) => {
						updateMouth({ dryness: checked });
					}}
					days={mouth.drynessDays}
					setDays={(days) => {
						updateMouth({ drynessDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Cotton Feeling"
					checked={mouth.cottonFeeling}
					setChecked={(checked) => {
						updateMouth({ cottonFeeling: checked });
					}}
					days={mouth.cottonFeelingDays}
					setDays={(days) => {
						updateMouth({ cottonFeelingDays: days });
					}}
				/>
			</Row>

			<Row>
				<BasicSymptomInput
					label="Ulcerations Inside of Mouth"
					checked={mouth.ulcerationsInside}
					setChecked={(checked) => {
						updateMouth({ ulcerationsInside: checked });
					}}
					days={mouth.ulcerationsInsideDays}
					setDays={(days) => {
						updateMouth({ ulcerationsInsideDays: days });
					}}
				/>

				<BasicSymptomInput
					label="Ulcerations around Mouth/ Corners"
					checked={mouth.ulcerationsAround}
					setChecked={(checked) => {
						updateMouth({ ulcerationsAround: checked });
					}}
					days={mouth.ulcerationsAroundDays}
					setDays={(days) => {
						updateMouth({ ulcerationsAroundDays: days });
					}}
				/>
			</Row>

			<Col style={styles.headerDarkGray}>
				<Text>Neonatal Symptoms</Text>
			</Col>

			<Row>
				<BasicSymptomInput
					label="Inability to breastfeed"
					checked={neonatal.inabilityToBreastFeed}
					// times={true}
					showNumberDays={false}
					checked={neonatal.inabilityToBreastFeed}
					setChecked={(checked) => {
						updateNeonatal({ inabilityToBreastFeed: checked });
					}}
					days=""
					setDays={(days) => {}}
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
