import create from "zustand";

// mouth symtoms store
export const initialMouth = {
	dryness: "",
	drynessDays: "",

	cottonFeeling: "",
	cottonFeelingDays: "",

	ulcerationsInside: "",
	ulcerationsInsideDays: "",

	ulcerationsAround: "",
	ulcerationsAroundDays: "",
};

type MouthData = {
	dryness?: string;
	drynessDays?: string;

	cottonFeeling?: string;
	cottonFeelingDays?: string;

	ulcerationsInside?: string;
	ulcerationsInsideDays?: string;

	ulcerationsAround?: string;
	ulcerationsAroundDays?: string;
};

type Mouth = MouthData & {
	setMouth: (by: { [key in keyof MouthData]: string }) => void;
};

export const useMouth = create<Mouth>((set) => ({
	...initialMouth,
	setMouth: (data: { [key in keyof MouthData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
