import create from "zustand";

// musculoskeletal symptoms store
export const initialMusculoskeletal = {
	myalgia: "",
	myalgiaDays: "",

	historyOfTrauma: "",
	historyOfTraumaDays: "",

	fatique: "",
	fatiqueDays: "",
};

type MusculoskeletalData = {
	myalgia?: string;
	myalgiaDays?: string;

	historyOfTrauma?: string;
	historyOfTraumaDays?: string;

	fatique?: string;
	fatiqueDays?: string;
};

type Musculoskeletal = MusculoskeletalData & {
	setMusculoskeletal: (
		by: { [key in keyof MusculoskeletalData]: string }
	) => void;
};

export const useMusculoskeletal = create<Musculoskeletal>((set) => ({
	...initialMusculoskeletal,
	setMusculoskeletal: (
		data: { [key in keyof MusculoskeletalData]: string }
	) => set((state) => ({ ...state, ...data })),
}));
