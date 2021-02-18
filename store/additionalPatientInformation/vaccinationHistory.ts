import create from "zustand";

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
	updateVaccinationHistory: (
		by: { [key in keyof VaccinationHistoryData]: string }
	) => void;
};
export const useVaccinationHistory = create<VaccinationHistory>((set) => ({
	...initialVaccinationHistory,
	updateVaccinationHistory: (data: VaccinationHistoryData) => {
		set((state) => ({ ...state, ...data }));
	},
}));
