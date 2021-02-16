import create from "zustand";

// microbiology tests store
export const initialMicrobiologyTests = {
	lumbarPuncture: "",
	lumbarPunctureValue: "",
	bloodCulture: "",
	bloodCultureValue: "",
};

type MicrobiologyTestsData = {
	lumbarPuncture?: string;
	lumbarPunctureValue?: string;
	bloodCulture?: string;
	bloodCultureValue?: string;
};

type MicrobiologyTests = MicrobiologyTestsData & {
	updateMicrobiologyTests: (
		by: { [key in keyof MicrobiologyTestsData]: string }
	) => void;
};

export const useMicrobiologyTests = create<MicrobiologyTests>((set) => ({
	...initialMicrobiologyTests,
	updateMicrobiologyTests: (
		data: { [key in keyof MicrobiologyTestsData]: string }
	) => set((state) => ({ ...state, ...data })),
}));
