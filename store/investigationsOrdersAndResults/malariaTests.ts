import create from "zustand";

// malaria tests store
export const initialMalariaTests = {
	bloodSlide: "",
	bloodSlideValue: "",
	rapidTest: "",
	rapidTestValue: "",
};

type MalariaTestsData = {
	bloodSlide?: string;
	bloodSlideValue?: string;
	rapidTest?: string;
	rapidTestValue?: string;
};

type MalariaTests = MalariaTestsData & {
	updateMalariaTests: (
		by: { [key in keyof MalariaTestsData]: string }
	) => void;
};

export const useMalariaTests = create<MalariaTests>((set) => ({
	...initialMalariaTests,
	updateMalariaTests: (data: { [key in keyof MalariaTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
