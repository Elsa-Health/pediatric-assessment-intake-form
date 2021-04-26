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
	updateHIVTests: (by: { [key in keyof HIVTestsData]: string }) => void;
};

export const useHIVTests = create<HIVTests>((set) => ({
	...initialHivTests,
	updateHIVTests: (data: { [key in keyof HIVTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
