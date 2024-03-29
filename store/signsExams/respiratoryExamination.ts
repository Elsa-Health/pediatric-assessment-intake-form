import create from "zustand";

// respiratory examination store
export const initialRespiratoryExamination = {
	chestLook: [],
	airEntry: "",
	breathSounds: "",
	crackles: "",
	wheezing: "",
};

type RespiratoryExaminationData = {
	chestLook?: string[];
	airEntry?: string;
	breathSounds?: string;
	crackles?: string;
	wheezing?: string;
};

type RespiratoryExamination = RespiratoryExaminationData & {
	updateRespiratoryExamination: (
		by:
			| { [key in keyof RespiratoryExaminationData]: string }
			| { [key in keyof RespiratoryExaminationData]: string[] }
	) => void;
};

export const useRespiratoryExamination = create<RespiratoryExamination>(
	(set) => ({
		...initialRespiratoryExamination,
		updateRespiratoryExamination: (data) =>
			set((state) => ({ ...state, ...data })),
	})
);
