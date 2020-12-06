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
	SubmitButton
	// ChiefComplaints
} from "./components";




export default function App() {
	// const mainStore = useMainStore((state) => state);
	// const { SUBMIT_URL } = process.env;
	// console.log("ROOT APP URL ", SUBMIT_URL);
	// console.log(TestRenderer.create(<Symptoms/>).toJSON());
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
