// THIS APP WORKS BEST IN GOOGLE CHROME SOME THINGS BREAKS IN FIREFOX

import React, { useState } from "react";
import { View } from "react-native";
// import { TextField } from 'material-bread'

import { SUBMIT_URL } from "@env";

import _ from "lodash";

// TODO: CReate Radio/Checkbox Question Component
// TODO: Create TextInput Component
// TODO: Create a better grid system
// TODO: Reduce repeating codes

// all the state here before the components

// importing all the components and states here
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
} from "./store";
import {
	Row,
	Col,
	Input,
	CheckBox,
	SimpleQuestion,
	Spacer,
	FitTextToCell,
	BasicSymptomInput,
	Header,
	MainHeader,
	TableHeader,
	Table,
	PatientInformation,
	ChiefComplaints,
	Symptoms,
	AdditionalPatientInformation,
	SignsExam,
	Diefferentials,
	OrdersResults,
	FinalDiagnosis,
	// ChiefComplaints
} from "./components";
import { Button } from "react-native-paper";
import { getEnvironment } from "./variables";
import { useHeaderInformation } from "./store/headerInformation";
import { useMainStore } from "./store/main";

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

	const handleSubmit = () => {
		console.log("The submitted data");
		console.log(data);
		setLoadingIn(true);
		fetch(SUBMIT_URL, params)
			.then((res) => res.json())
			.then((data) => {
				alert("data already submitted");
				console.log("Returned data");
				console.log(data);
				setLoadingIn(false);
			})
			.catch((err) => {
				alert("oops something went wrong please  try again");
				console.log("Something went wrong : ", err);
				setLoadingIn(false);
			});
	};

	return (
		<View>
			<Button
				// icon="camera"
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

export default function App() {
	// const mainStore = useMainStore((state) => state);
	// const { SUBMIT_URL } = process.env;
	console.log("ROOT APP URL ", SUBMIT_URL);

	return (
		<View style={{ backgroundColor: "#DEDFE4", paddingVertical: 36 }}>
			<View
				style={{
					padding: 72,
					width: 1024,
					alignSelf: "center",
					backgroundColor: "white",
				}}
			>
				<Header />
				<MainHeader />
				<PatientInformation />
				<Spacer size={12} />
				<ChiefComplaints />
				<Spacer size={12} />
				<Symptoms />
				<Spacer size={12} />
				<AdditionalPatientInformation />
				<Spacer size={12} />
				<SignsExam />
				<Spacer size={12} />
				<Diefferentials />
				<Spacer size={12} />
				<OrdersResults />
				<Spacer size={23} />
				<FinalDiagnosis />
				<Spacer size={23} />
				<SubmitButton />
			</View>
		</View>
	);
}
