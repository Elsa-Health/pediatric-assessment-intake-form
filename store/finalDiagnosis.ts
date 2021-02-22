import create from "zustand";

type FinalDiagnosis = {
	finalDiagnosisText?: string;
	updateFinalDiagnosis: (by: { finalDiagnosisText: string }) => void;
};

export const useFinalDiagnosis = create<FinalDiagnosis>((set) => ({
	finalDiagnosisText: "",
	updateFinalDiagnosis: (data) => set((state) => ({ ...state, ...data })),
}));
