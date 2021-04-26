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
	updateBirthHistory: (
		by: { [key in keyof BirthHistoryData]: string }
	) => void;
};

export const useBirthHistory = create<BirthHistory>((set) => ({
	...initialBirthHistory,
	updateBirthHistory: (data: { [key in keyof BirthHistoryData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
