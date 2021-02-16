import create from "zustand";

// skin examination
export const initialSkinExamination = {
	lesion: "",
	lesionRegion: "",
	lesionShape: "",
	lesionFrequency: "",

	type: [],
	typeOther: "",

	margins: "",

	skinUnamedQuestion: "",

	feature: [],
	featureColor: "",

	houseHoldWithSimilarProblem: "",

	notes: "",
};

type SkinExaminationData = {
	lesion?: string;
	lesionRegion?: string;
	lesionShape?: string;
	lesionFrequency?: string;

	type?: string[];
	typeOther?: string;

	margins?: string;

	skinUnamedQuestion?: string;

	feature?: string[];
	featureColor?: string;

	houseHoldWithSimilarProblem?: string;

	notes?: string;
};

type SkinExamination = SkinExaminationData & {
	setSkinExamination: (
		by:
			| { [key in keyof SkinExaminationData]: string }
			| { [key in keyof SkinExaminationData]: string[] }
	) => void;
};

export const useSkinExamination = create<SkinExamination>((set) => ({
	...initialSkinExamination,
	setSkinExamination: (data) => set((state) => ({ ...state, ...data })),
}));
