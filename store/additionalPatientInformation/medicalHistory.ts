import create from "zustand";

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
	updateMedicalHistory: (
		by: { [key in keyof MedicalHistoryData]: string }
	) => void;
};

export const useMedicalHistory = create<MedicalHistory>((set) => ({
	...initialMedicalHistory,
	updateMedicalHistory: (data: MedicalHistoryData) =>
		set((state) => ({ ...state, ...data })),
}));
