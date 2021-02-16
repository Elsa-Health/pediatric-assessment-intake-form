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
	setMedicalHistory: (
		by: { [key in keyof MedicalHistoryData]: string }
	) => void;
};

export const useMedicalHistory = create<MedicalHistory>((set) => ({
	...initialMedicalHistory,
	setMedicalHistory: (data: MedicalHistoryData) =>
		set((state) => ({ ...state, ...data })),
}));
