import create from "zustand";

// glucose tests store
export const initialGlucoseTests = {
	stickTest: "",
	stickTestValue: "",
	laboratory: "",
	laboratoryValue: "",
};

type GlucoseTestsData = {
	stickTest?: string;
	stickTestValue?: string;
	laboratory?: string;
	laboratoryValue?: string;
};

type GlucoseTests = GlucoseTestsData & {
	setGlucoseTests: (by: { [key in keyof GlucoseTestsData]: string }) => void;
};

export const useGlucoseTests = create<GlucoseTests>((set) => ({
	...initialGlucoseTests,
	setGlucoseTests: (data: { [key in keyof GlucoseTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
