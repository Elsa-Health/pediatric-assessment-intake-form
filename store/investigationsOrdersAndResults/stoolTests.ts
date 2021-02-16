import create from "zustand";

// stool tests store
export const initialStoolTests = {
	microscopy: "",
	microscopyValue: "",
	microCulture: "",
	microCultureValue: "",
};

type StoolTestsData = {
	microscopy?: string;
	microscopyValue?: string;
	microCulture?: string;
	microCultureValue?: string;
};

type StoolTests = StoolTestsData & {
	setStoolTests: (by: { [key in keyof StoolTestsData]: string }) => void;
};
export const useStoolTests = create<StoolTests>((set) => ({
	...initialStoolTests,
	setStoolTests: (data: { [key in keyof StoolTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
