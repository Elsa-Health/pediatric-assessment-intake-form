// THIS APP WORKS BEST IN GOOGLE CHROME SOME THINGS BREAKS IN FIREFOX

import React, { useState } from "react";
import { Platform, View } from "react-native";
// import { TextField } from 'material-bread'

import { DEVELOPMENT_URL, PRODUCTION_URL } from "@env";

import _ from "lodash";

import "isomorphic-fetch"; //trying to handle fetch on node.js

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
	initialPatientInfo,
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
	initialHeaderInfo,
	useHeaderInformation,
} from "../store/headerInformation";
import isDev from "../utils";

const SubmitButton = ({
	loading = false,
	user,
}: {
	loading?: boolean;
	user: { email: string | null; uid: string | null };
}) => {
	// const mainStore = useMainStore((state) => state);

	// console.log("Main store : ", mainStore);
	const [loadingIn, setLoadingIn] = useState(false);

	const { setHeaderInfo, ...headerInfo } = useHeaderInformation(
		(state) => state
	);
	const { setPatientInformation, ...patientInfo } = usePatientInformation(
		(state) => state
	);
	const { setChiefComplains, ...chiefComplains } = useChiefComplains(
		(state) => state
	);

	// Symptoms stores
	const { setGeneralState, ...generalSymptoms } = useGeneralSymptoms(
		(state) => state
	);
	const { setRespiratory, ...respiratory } = useRespiratory((state) => state);
	const { setGI, ...gi } = useGI((state) => state);
	const { setCNS, ...cns } = useCNS((state) => state);
	const { setMusculoskeletal, ...muskuloskeletal } = useMusculoskeletal(
		(state) => state
	);
	const { setEarsAndEyes, ...eyesAndEars } = useEarsAndEyes((state) => state);
	const { setMouth, ...mouth } = useMouth((state) => state);

	const { setNeonatal, ...neonatal } = useNeonatal((state) => state);

	const { setOthers, ...others } = useOthers((state) => state);

	//additional patient information stores
	const { setBirthHistory, ...birthHistory } = useBirthHistory(
		(state) => state
	);
	const {
		setNutritionalHistory,
		...nutritionalHistory
	} = useNutritionalHistory((state) => state);
	const {
		setVaccinationHistory,
		...vaccinationHistory
	} = useVaccinationHistory((state) => state);
	const { setMedicalHistory, ...medicalHistory } = useMedicalHistory(
		(state) => state
	);

	//signs and exams store
	const { setVitalSigns, ...vitalSignsExam } = useVitalSigns(
		(state) => state
	);
	const { setGeneralExamination, ...generalExam } = useGeneralExamination(
		(state) => state
	);
	const {
		setRespiratoryExamination,
		...respiratoryExam
	} = useRespiratoryExamination((state) => state);
	const {
		setAbdominalExamination,
		...abdominalExam
	} = useAbdominalExamination((state) => state);
	const { setSkinExamination, ...skinExam } = useSkinExamination(
		(state) => state
	);

	const {
		setNeurologicalExamination,
		...neurologicalExam
	} = useNeurologicalExamination((state) => state);

	//differential examination
	const { setDifferentials, ...differentials } = useDifferentials(
		(state) => state
	);

	// investigation and orders store
	const { setMalariaTests, ...malariaTests } = useMalariaTests(
		(state) => state
	);
	const { setMicrobiologyTests, ...microbiologyTests } = useMicrobiologyTests(
		(state) => state
	);
	const { setTBTests, ...tbTests } = useTBTests((state) => state);
	const { setChemistryTests, ...chemistryTests } = useChemistryTests(
		(state) => state
	);
	const { setStoolTests, ...stoolTests } = useStoolTests((state) => state);

	const { setHematologyTests, ...hematologyTests } = useHematologyTests(
		(state) => state
	);
	const { setXRayTests, ...xrayTests } = useXRayTests((state) => state);

	const { setGlucoseTests, ...glucoseTests } = useGlucoseTests(
		(state) => state
	);
	const { setHIVTests, ...hivTests } = useHIVTests((state) => state);

	const { setUrineTests, ...urineTests } = useUrineTests((state) => state);

	//final diagnosis
	const { setFinalDiagnosis, ...finalDiagnosis } = useFinalDiagnosis(
		(state) => state
	);

	// console.log("Header info : ", patientInfo);

	//to move this to main store may be?
	const data = {
		// all data here

		//todo : may be to remove setFunctions to store object

		patientId: headerInfo.patientID,
		visitDate: headerInfo.visitDate,
		patientInfo: {
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
			neontal: { ...neonatal },
			...others,
		},
		additionalPatientInfomation: {
			birthHistory: { ...birthHistory },
			nutritionalHistory: { ...nutritionalHistory },
			vaccinationHistory: { ...vaccinationHistory },
			previousMedicalHistroy: { ...medicalHistory },
		},
		signsExams: {
			vitalSigns: { ...vitalSignsExam },
			geneal: { ...generalExam },
			respiratory: { ...respiratoryExam },
			abdominal: { ...abdominalExam },
			skin: { ...skinExam },
			neurologicalExam: { ...neurologicalExam },
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

	const toLowerCase = (obj) => {
		if (!obj) {
			return;
		}
		if (typeof obj !== "Object" && typeof obj !== "object") {
			return;
		}
		var keys = Object.keys(obj);
		var result = {};
		keys.map(function (k, v) {
			if (typeof k === "string") {
				if (typeof obj[k] === "string") {
					result[k.toLowerCase()] = obj[k].toLowerCase();
				} else {
					// if the node is an object, perform the same process over that node
					if (
						typeof obj[k] === "Object" ||
						typeof obj[k] === "object"
					) {
						result[k.toLowerCase()] = toLowerCase(obj[k]);
					} else {
						result[k.toLowerCase()] = obj[k];
					}
				}
			}
		});
		return result;
	};

	const params = {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify(toLowerCase(data)),
	};

	const clearStores = () => {
		// clearing the data here
		setHeaderInfo(initialHeaderInfo);
		setPatientInformation(initialPatientInfo);
		setChiefComplains({ complains: "" });

		//clearing symtoms states
		setGeneralState(initialGeneralSymptoms);
		setRespiratory(initialRespiratorySymptoms);
		setGI(initialGISymtoms);
		setCNS(initilCNSSymtoms);
		setMusculoskeletal(initialMusculoskeletal);
		setEarsAndEyes(initialEarsAndEyes);
		setMouth(initialMouth);
		setNeonatal({ inabilityToBreastFeed: "" });

		setOthers({ others: "" });

		// clearing additiona patient info
		setBirthHistory(initialBirthHistory);
		setNutritionalHistory(initialNutritionalHistroy);
		setVaccinationHistory(initialVaccinationHistory);
		setMedicalHistory(initialMedicalHistory);

		// clearing signs and exams stores
		setVitalSigns(initialVitalSigns);
		setGeneralExamination(initialGeneralExamination);
		setRespiratoryExamination(initialRespiratoryExamination);
		setAbdominalExamination(initialAbdominalExamination);
		setNeurologicalExamination(initialneurologicalExamination);

		// clearing differentials store
		setDifferentials(initialDifferentials);

		// clearing investigantion and orders stores
		setMalariaTests(initialMalariaTests);
		setMicrobiologyTests(initialMicrobiologyTests);
		setTBTests(initialTbTests);
		setChemistryTests(initialChemistryTests);
		setStoolTests(initialStoolTests);
		setHematologyTests(initialHematologyTests);
		setXRayTests(initialXRayTests);
		setGlucoseTests(initialGlucoseTests);
		setHIVTests(initialHivTests);
		setUrineTests(initialUrineTests);

		//clearing final diagnosis
		setFinalDiagnosis({ finalDiagnosisText: "" });
	};

	const handleSubmit = async () => {
		if (!window.confirm("Are you sure you want to submit?")) {
			return;
		}
		// return;
		// console.log("Submitting the data to the server ...", DEVELOPMENT_URL);
		// console.log(data);
		setLoadingIn(true);
		fetch(DEVELOPMENT_URL, params)
			.then((res) => res.json())
			.then((res) => {
				setLoadingIn(false);
				// console.log("Returned response : ", res);

				clearStores();

				if (Platform.OS == "web") {
					alert("Data already submitted");
					window.scrollTo({ top: 0, behavior: "smooth" });
				}
			})
			.catch((err) => {
				setLoadingIn(false);
				// console.log("something went wrong ", err);
				// setHeader;
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
				// icon="camera"
				testID="submitButton"
				mode="contained"
				onPress={handleSubmit}
				style={{
					height: 48,
					justifyContent: "center",
					// backgroundColor: "#0B0E26",
				}}
				labelStyle={{
					color: "white",
				}}
				loading={loadingIn}
				uppercase={false}
				disabled={loadingIn}
			>
				{loadingIn ? "Submitting the data..." : "Submit "}
			</Button>
		</View>
	);
};

export { SubmitButton };
