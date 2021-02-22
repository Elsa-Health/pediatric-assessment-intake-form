import create from "zustand";

// hematology tests store

export const initialHematologyTests = {
	hb: "",
	hbValue: "",
	fullBloodPicture: "",
	fullBloodPictureValue: "",
};

type HematologyTestsData = {
	hb?: string;
	hbValue?: string;
	fullBloodPicture?: string;
	fullBloodPictureValue?: string;
};

type HematologyTests = HematologyTestsData & {
	updateHematologyTests: (
		by: { [key in keyof HematologyTestsData]: string }
	) => void;
};

export const useHematologyTests = create<HematologyTests>((set) => ({
	...initialHematologyTests,
	updateHematologyTests: (data) => set((state) => ({ ...state, ...data })),
}));
