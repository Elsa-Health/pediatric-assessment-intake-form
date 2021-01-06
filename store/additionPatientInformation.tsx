import create from "zustand";

export const initialBirthHistory = {
	gestation: "",
	mothersAgeAtDelivery: "",
	complicationsAfterDelivery: "",
	apgarScore: "",
	additionalBirthHistoryNotes: "",
};

export const useBirthHistory = create((set) => ({
	...initialBirthHistory,

	//thos is to update all data state
	setBirthHistory: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialNutritionalHistroy = {
	breastfed: "",
	wasItExclusive: "",
	breadfeedingStartTime: "",
	breastfeedingStartTimeDays: "",
	breastfeedingStartTimeMonths: "",
	vitaminASupplements: "",
};
export const useNutritionalHistory = create((set) => ({
	...initialNutritionalHistroy,
	//thos is to update all data state
	setNutritionalHistory: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialVaccinationHistory = {
	updateOnAllVaccines: "",
	missingNotes: "",
};
export const useVaccinationHistory = create((set) => ({
	...initialVaccinationHistory,
	//thos is to update all data state
	setVaccinationHistory: (data) => set((state) => ({ ...state, ...data })),
}));

export const initialMedicalHistory = {
	previousAdmission: "",
	whyPreviousAdmission: "",
	antibioticUse: "",
};
export const useMedicalHistory = create((set) => ({
	...initialMedicalHistory,
	//thos is to update all data state
	setMedicalHistory: (data) => set((state) => ({ ...state, ...data })),
}));
