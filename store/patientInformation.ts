import create from "zustand";

export const initialPatientInformation = {
	dob: "",
	years: "",
	months: "",
	days: "",
	sex: "",
	location: "",
	otherMedicalCondition: "",
};

type PatientInformationData = {
	dob?: string;
	years?: string;
	months?: string;
	days?: string;
	sex?: string;
	location?: string;
	otherMedicalCondition?: string;
};

type PatientInformation = PatientInformationData & {
	updatePatientInformation: (
		by: { [key in keyof PatientInformationData]: string }
	) => void;
};

export const usePatientInformation = create<PatientInformation>((set) => ({
	...initialPatientInformation,
	//thos is to update all data state
	updatePatientInformation: (
		data: { [key in keyof PatientInformationData]: string }
	) => set((state) => ({ ...state, ...data })),
}));
