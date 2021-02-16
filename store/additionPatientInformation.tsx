import create from "zustand";

// birth history store
export const initialBirthHistory = {
	gestation: "",
	mothersAgeAtDelivery: "",
	complicationsAfterDelivery: "",
	apgarScore: "",
	additionalBirthHistoryNotes: "",
};

type BirthHistoryData = {
	gestation?: string;
	mothersAgeAtDelivery?: string;
	complicationsAfterDelivery?: string;
	apgarScore?: string;
	additionalBirthHistoryNotes?: string;
};

type BirthHistory = BirthHistoryData & {
	setBirthHistory: (by: { [key in keyof BirthHistoryData]: string }) => void;
};

export const useBirthHistory = create<BirthHistory>((set) => ({
	...initialBirthHistory,
	setBirthHistory: (data: { [key in keyof BirthHistoryData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));

//nutritional history store
export const initialNutritionalHistroy = {
	breastfed: "",
	wasBreastFeedingExclusive: "",
	breastFeedingStartTime: "",
	breastFeedingStartTimeDays: "",
	breastFeedingStartTimeMonths: "",
	vitaminASupplements: "",
};

type NutritionalHistroyData = {
	breastfed?: string;
	wasBreastFeedingExclusive?: string;
	breastFeedingStartTime?: string;
	breastFeedingStartTimeDays?: string;
	breastFeedingStartTimeMonths?: string;
	vitaminASupplements?: string;
};

type NutritionalHistroy = NutritionalHistroyData & {
	setNutritionalHistory: (
		by: { [key in keyof NutritionalHistroyData]: string }
	) => void;
};

export const useNutritionalHistory = create<NutritionalHistroy>((set) => ({
	...initialNutritionalHistroy,

	setNutritionalHistory: (data: NutritionalHistroyData) =>
		set((state) => ({ ...state, ...data })),
}));

// vacination history store
export const initialVaccinationHistory = {
	updateOnAllVaccines: "",
	missingNotes: "",
};

type VaccinationHistoryData = {
	updateOnAllVaccines?: string;
	missingNotes?: string;
};

type VaccinationHistory = VaccinationHistoryData & {
	setVaccinationHistory: (
		by: { [key in keyof VaccinationHistoryData]: string }
	) => void;
};
export const useVaccinationHistory = create<VaccinationHistory>((set) => ({
	...initialVaccinationHistory,
	setVaccinationHistory: (data: VaccinationHistoryData) => {
		set((state) => ({ ...state, ...data }));
	},
}));

// medical history store
export const initialMedicalHistory = {
	previousAdmission: "",
	whyPreviousAdmission: "",
	antibioticUse: "",
};

type MedicalHistoryData = {
	previousAdmission?: string;
	whyPreviousAdmission?: string;
	antibioticUse?: string;
};

type MedicalHistory = MedicalHistoryData & {
	setMedicalHistory: (
		by: { [key in keyof MedicalHistoryData]: string }
	) => void;
};

export const useMedicalHistory = create<MedicalHistory>((set) => ({
	...initialMedicalHistory,
	setMedicalHistory: (data: MedicalHistoryData) =>
		set((state) => ({ ...state, ...data })),
}));
