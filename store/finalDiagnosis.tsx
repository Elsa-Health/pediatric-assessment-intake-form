import create from "zustand";

type FinalDiagnosis = {
	finalDiagnosisText?: string;
	setFinalDiagnosis: (by: { finalDiagnosisText: string }) => void;
};

export const useFinalDiagnosis = create<FinalDiagnosis>((set) => ({
	finalDiagnosisText: "",
	setFinalDiagnosis: (data) => set((state) => ({ ...state, ...data })),
}));
