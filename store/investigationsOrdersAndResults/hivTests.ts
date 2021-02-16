import create from "zustand";

// hiv tests store
export const initialHivTests = {
	rapidTest: "",
	rapidTestValue: "",
	pcr: "",
	pcrValue: "",
};

type HIVTestsData = {
	rapidTest?: string;
	rapidTestValue?: string;
	pcr?: string;
	pcrValue?: string;
};

type HIVTests = HIVTestsData & {
	setHIVTests: (by: { [key in keyof HIVTestsData]: string }) => void;
};

export const useHIVTests = create<HIVTests>((set) => ({
	...initialHivTests,
	setHIVTests: (data: { [key in keyof HIVTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
