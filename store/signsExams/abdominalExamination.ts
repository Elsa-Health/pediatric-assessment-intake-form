import create from "zustand";

// abdnominal examination store
export const initialAbdominalExamination = {
	masses: "",
	tenderness: "",
	reboundTenderness: "",
	rectalProlapse: "",

	analExamination: "",

	abdomenSection: "",
};

type AbdominalExaminationData = {
	masses?: string;
	tenderness?: string;
	reboundTenderness?: string;
	rectalProlapse?: string;
	analExamination?: string;
	abdomenSection?: string;
};

type AbdominalExamination = AbdominalExaminationData & {
	setAbdominalExamination: (
		by: { [key in keyof AbdominalExaminationData]: string }
	) => void;
};

export const useAbdominalExamination = create<AbdominalExamination>((set) => ({
	...initialAbdominalExamination,
	//thos is to update all data state
	setAbdominalExamination: (
		data: { [key in keyof AbdominalExaminationData]: string }
	) => set((state) => ({ ...state, ...data })),
}));
