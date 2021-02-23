import React, { useState } from "react";
import { Platform, View } from "react-native";

import _ from "lodash";

import "isomorphic-fetch";

import {
	useGeneralSymptoms,
	useRespiratory,
	useGI,
	usePatientInformation,
	useChiefComplains,
	useCNS,
	useMusculoskeletal,
	useEarsAndEyes,
	useMouth,
	useNeonatal,
	useBirthHistory,
	useNutritionalHistory,
	useVaccinationHistory,
	useMedicalHistory,
	useVitalSigns,
	useGeneralExamination,
	useRespiratoryExamination,
	useAbdominalExamination,
	useSkinExamination,
	useNeurologicalExamination,
	useDifferentials,
	useMalariaTests,
	useMicrobiologyTests,
	useTBTests,
	useChemistryTests,
	useStoolTests,
	useHematologyTests,
	useXRayTests,
	useGlucoseTests,
	useHIVTests,
	useUrineTests,
	useFinalDiagnosis,
	initialPatientInformation,
	initialGeneralSymptoms,
	initialRespiratorySymptoms,
	initialGISymtoms,
	initilCNSSymtoms,
	initialMusculoskeletal,
	initialEarsAndEyes,
	initialMouth,
	initialBirthHistory,
	initialNutritionalHistroy,
	initialVaccinationHistory,
	initialMedicalHistory,
	initialVitalSigns,
	initialGeneralExamination,
	initialRespiratoryExamination,
	initialAbdominalExamination,
	initialneurologicalExamination,
	initialMalariaTests,
	initialMicrobiologyTests,
	initialTbTests,
	initialChemistryTests,
	initialStoolTests,
	initialHematologyTests,
	initialXRayTests,
	initialGlucoseTests,
	initialHivTests,
	initialUrineTests,
	initialDifferentials,
	useOthers,
} from "../store";

import { Button } from "react-native-paper";
import {
	initialHeaderInformation,
	useHeaderInformation,
} from "../store/headerInformation";

const SubmitButton = ({
	user,
}: {
	user: { email: string | null; uid: string | null };
}) => {
	const [loadingIn, setLoadingIn] = useState(false);

	const { updateHeaderInformation, ...headerInfo } = useHeaderInformation(
		(state) => state
	);
	const { updatePatientInformation, ...patientInfo } = usePatientInformation(
		(state) => state
	);
	const { updateChiefComplains, ...chiefComplains } = useChiefComplains(
		(state) => state
	);

	// Symptoms stores
	const { updateGeneralState, ...generalSymptoms } = useGeneralSymptoms(
		(state) => state
	);
	const { updateRespiratory, ...respiratory } = useRespiratory(
		(state) => state
	);
	const { updateGI, ...gi } = useGI((state) => state);
	const { updateCNS, ...cns } = useCNS((state) => state);
	const { updateMusculoskeletal, ...muskuloskeletal } = useMusculoskeletal(
		(state) => state
	);
	const { updateEarsAndEyes, ...eyesAndEars } = useEarsAndEyes(
		(state) => state
	);
	const { updateMouth, ...mouth } = useMouth((state) => state);

	const { updateNeonatal, ...neonatal } = useNeonatal((state) => state);

	const { updateOthers, ...others } = useOthers((state) => state);

	//additional patient information stores
	const { updateBirthHistory, ...birthHistory } = useBirthHistory(
		(state) => state
	);
	const {
		updateNutritionalHistory,
		...nutritionalHistory
	} = useNutritionalHistory((state) => state);
	const {
		updateVaccinationHistory,
		...vaccinationHistory
	} = useVaccinationHistory((state) => state);
	const { updateMedicalHistory, ...medicalHistory } = useMedicalHistory(
		(state) => state
	);

	//signs and exams store
	const { updateVitalSigns, ...vitalSignsExam } = useVitalSigns(
		(state) => state
	);
	const { updateGeneralExamination, ...generalExam } = useGeneralExamination(
		(state) => state
	);
	const {
		updateRespiratoryExamination,
		...respiratoryExam
	} = useRespiratoryExamination((state) => state);
	const {
		updateAbdominalExamination,
		...abdominalExam
	} = useAbdominalExamination((state) => state);
	const { updateSkinExamination, ...skinExam } = useSkinExamination(
		(state) => state
	);

	const {
		updateNeurologicalExamination,
		...neurologicalExam
	} = useNeurologicalExamination((state) => state);

	//differential examination
	const { updateDifferentials, ...differentials } = useDifferentials(
		(state) => state
	);

	// investigation and orders store
	const { updateMalariaTests, ...malariaTests } = useMalariaTests(
		(state) => state
	);
	const {
		updateMicrobiologyTests,
		...microbiologyTests
	} = useMicrobiologyTests((state) => state);
	const { updateTBTests, ...tbTests } = useTBTests((state) => state);
	const { updateChemistryTests, ...chemistryTests } = useChemistryTests(
		(state) => state
	);
	const { updateStoolTests, ...stoolTests } = useStoolTests((state) => state);

	const { updateHematologyTests, ...hematologyTests } = useHematologyTests(
		(state) => state
	);
	const { updateXRayTests, ...xrayTests } = useXRayTests((state) => state);

	const { updateGlucoseTests, ...glucoseTests } = useGlucoseTests(
		(state) => state
	);
	const { updateHIVTests, ...hivTests } = useHIVTests((state) => state);

	const { updateUrineTests, ...urineTests } = useUrineTests((state) => state);

	//final diagnosis
	const { updateFinalDiagnosis, ...finalDiagnosis } = useFinalDiagnosis(
		(state) => state
	);

	//to move this to main store may be?
	const data = {
		// all data here

		//todo : may be to remove setFunctions to store object

		patientId: headerInfo.patientID,
		visitDate: headerInfo.visitDate,
		patientInformation: {
			...patientInfo,
		},
		chiefComplains: {
			...chiefComplains,
		},
		symptoms: {
			general: { ...generalSymptoms },
			respiratory: { ...respiratory },
			gi: { ...gi },
			cns: { ...cns },
			musculoskeletal: { ...muskuloskeletal },
			eyesAndEars: { ...eyesAndEars },
			mouth: { ...mouth },
			neonatal: { ...neonatal },
			...others,
		},
		additionalPatientInformation: {
			birthHistory: { ...birthHistory },
			nutritionalHistory: { ...nutritionalHistory },
			vaccinationHistory: { ...vaccinationHistory },
			medicalHistory: { ...medicalHistory },
		},
		signsExams: {
			vital: { ...vitalSignsExam },
			general: { ...generalExam },
			respiratory: { ...respiratoryExam },
			abdominal: { ...abdominalExam },
			skin: { ...skinExam },
			neurological: { ...neurologicalExam },
		},
		differentials: {
			...differentials,
		},
		investigationOrdersAndResults: {
			malaria: { ...malariaTests },
			microbiology: { ...microbiologyTests },
			tb: { ...tbTests },
			chemistry: { ...chemistryTests },
			stool: { ...stoolTests },
			hematology: { ...hematologyTests },
			xray: { ...xrayTests },
			glucose: { ...glucoseTests },
			hiv: { ...hivTests },
			urine: { ...urineTests },
		},
		finalDiagnosis: { ...finalDiagnosis },
		dataClerk: { ...user },
		addedTime: Date.now(),
	};

	function toLowerCase(data: any) {
		// convert to lowercase here
		return data;
	}

	const params = {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify(toLowerCase(data)),
	};

	const clearStores = () => {
		// clearing the data here
		updateHeaderInformation(initialHeaderInformation);
		updatePatientInformation(initialPatientInformation);
		updateChiefComplains({ complains: "" });

		//clearing symtoms states
		updateGeneralState(initialGeneralSymptoms);
		updateRespiratory(initialRespiratorySymptoms);
		updateGI(initialGISymtoms);
		updateCNS(initilCNSSymtoms);
		updateMusculoskeletal(initialMusculoskeletal);
		updateEarsAndEyes(initialEarsAndEyes);
		updateMouth(initialMouth);
		updateNeonatal({ inabilityToBreastFeed: "" });

		updateOthers({ others: "" });

		// clearing additiona patient info
		updateBirthHistory(initialBirthHistory);
		updateNutritionalHistory(initialNutritionalHistroy);
		updateVaccinationHistory(initialVaccinationHistory);
		updateMedicalHistory(initialMedicalHistory);

		// clearing signs and exams stores
		updateVitalSigns(initialVitalSigns);
		updateGeneralExamination(initialGeneralExamination);
		updateRespiratoryExamination(initialRespiratoryExamination);
		updateAbdominalExamination(initialAbdominalExamination);
		updateNeurologicalExamination(initialneurologicalExamination);

		// clearing differentials store
		updateDifferentials(initialDifferentials);

		// clearing investigantion and orders stores
		updateMalariaTests(initialMalariaTests);
		updateMicrobiologyTests(initialMicrobiologyTests);
		updateTBTests(initialTbTests);
		updateChemistryTests(initialChemistryTests);
		updateStoolTests(initialStoolTests);
		updateHematologyTests(initialHematologyTests);
		updateXRayTests(initialXRayTests);
		updateGlucoseTests(initialGlucoseTests);
		updateHIVTests(initialHivTests);
		updateUrineTests(initialUrineTests);

		//clearing final diagnosis
		updateFinalDiagnosis({ finalDiagnosisText: "" });
	};

	const handleSubmit = async () => {
		if (!window.confirm("Are you sure you want to submit?")) {
			return;
		}

		setLoadingIn(true);

		fetch(process.env.NEXT_PUBLIC_SUBMIT_URL, params)
			.then((res) => res.json())
			.then((res) => {
				setLoadingIn(false);

				clearStores();

				if (Platform.OS == "web") {
					alert("Data already submitted");
					window.scrollTo({ top: 0, behavior: "smooth" });
				}
			})
			.catch((err) => {
				setLoadingIn(false);

				if (Platform.OS == "web")
					alert(
						"Something went wrong while submitting the data : " +
							JSON.stringify(err)
					);
			});
	};

	return (
		<View>
			<Button
				testID="submitButton"
				mode="contained"
				onPress={handleSubmit}
				style={{
					height: 48,
					justifyContent: "center",
					backgroundColor: "#1F5EFF",
				}}
				labelStyle={{
					color: "white",
				}}
				loading={loadingIn}
				uppercase={false}
				disabled={loadingIn}
				accessibilityStates={null}
			>
				{loadingIn ? "Submitting the data..." : "Submit "}
			</Button>
		</View>
	);
};

export { SubmitButton };
