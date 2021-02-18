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
	updateStoolTests: (by: { [key in keyof StoolTestsData]: string }) => void;
};
export const useStoolTests = create<StoolTests>((set) => ({
	...initialStoolTests,
	updateStoolTests: (data: { [key in keyof StoolTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
