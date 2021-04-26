import create from "zustand";

// urine tests store
export const initialUrineTests = {
	urinalysis: "",
	urinalysisValue: "",
	microCulture: "",
	microCultureValue: "",
};

type UrineTestsData = {
	urinalysis?: string;
	urinalysisValue?: string;
	microCulture?: string;
	microCultureValue?: string;
};

type UrineTests = UrineTestsData & {
	updateUrineTests: (by: { [key in keyof UrineTestsData]: string }) => void;
};

export const useUrineTests = create<UrineTests>((set) => ({
	...initialUrineTests,
	updateUrineTests: (data: { [key in keyof UrineTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
