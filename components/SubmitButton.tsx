// THIS APP WORKS BEST IN GOOGLE CHROME SOME THINGS BREAKS IN FIREFOX

import React, { useState } from "react";
import { Platform, View } from "react-native";
// import { TextField } from 'material-bread'

import { SUBMIT_URL } from "@env";

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
} from "../store";

import { Button } from "react-native-paper";
import { useHeaderInformation } from "../store/headerInformation";

const SubmitButton = ({ loading = false }: { loading?: boolean }) => {
	// const mainStore = useMainStore((state) => state);

	// console.log("Main store : ", mainStore);
	const [loadingIn, setLoadingIn] = useState(false);

	const headerInfo = useHeaderInformation((state) => state);
	const patientInfo = usePatientInformation((state) => state);
	const chiefComplains = useChiefComplains((state) => state);

	// Symptoms stores
	const generalSymptoms = useGeneralSymptoms((state) => state);
	const respiratory = useRespiratory((state) => state);
	const gi = useGI((state) => state);
	const cns = useCNS((state) => state);
	const muskuloskeletal = useMusculoskeletal((state) => state);
	const eyesAndEars = useEarsAndEyes((state) => state);
	const mouth = useMouth((state) => state);

	const neonatal = useNeonatal((state) => state);

	//additional patient information stores
	const birthHistory = useBirthHistory((state) => state);
	const nutrionalHistory = useNutritionalHistory((state) => state);
	const vaccinationHistory = useVaccinationHistory((state) => state);
	const medicalHistory = useMedicalHistory((state) => state);

	//signs and exams store
	const vitalSignsExam = useVitalSigns((state) => state);
	const generalExam = useGeneralExamination((state) => state);
	const respiratoryExam = useRespiratoryExamination((state) => state);
	const abdominalExam = useAbdominalExamination((state) => state);
	const skinExam = useSkinExamination((state) => state);

	const neurologicalExam = useNeurologicalExamination((state) => state);

	//differential examination
	const differentials = useDifferentials((state) => state);

	// investigation and orders store
	const malariaTests = useMalariaTests((state) => state);
	const microbiologyTests = useMicrobiologyTests((state) => state);
	const tbTests = useTBTests((state) => state);
	const chemistryTests = useChemistryTests((state) => state);
	const stoolTests = useStoolTests((state) => state);

	const hematologyTests = useHematologyTests((state) => state);
	const xrayTests = useXRayTests((state) => state);

	const glucoseTests = useGlucoseTests((state) => state);
	const hivTests = useHIVTests((state) => state);

	const urineTests = useUrineTests((state) => state);

	//final diagnosis
	const finalDiagnosis = useFinalDiagnosis((state) => state);

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
		},
		additionalPatientInfomation: {
			birthHistory: { ...birthHistory },
			nutrionalHistory: { ...nutrionalHistory },
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
	};

	const params = {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify(data),
	};

	const handleSubmit = async () => {
		console.log("Submitting the data to the server ...");
		// console.log(data);
		setLoadingIn(true);

		const response = await fetch(SUBMIT_URL, params);
		if (!response.ok) {
			setLoadingIn(false);
			console.log("something went wrong ", response);
			const message = `An error has occured: ${response.status}`;
			if(Platform.OS=='web') alert('Something went wrong while submitting the data')
			throw new Error(message);
		}
		const res = await response.json();
		setLoadingIn(false);
		console.log("Returned response : ", res);
		
		if(Platform.OS=='web') alert('Data already submitted')
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
