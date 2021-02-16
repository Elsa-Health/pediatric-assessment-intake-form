import create from "zustand";

// chemistry tests store
export const initialChemistryTests = {
	nak: "",
	nakValue: "",
	uc: "",
	ucValue: "",
	caphos: "",
	caphosValue: "",
	alb: "",
	albValue: "",
	lft: "",
	lftValue: "",
};

type ChemistryTestsData = {
	nak?: string;
	nakValue?: string;
	uc?: string;
	ucValue?: string;
	caphos?: string;
	caphosValue?: string;
	alb?: string;
	albValue?: string;
	lft?: string;
	lftValue?: string;
};

type ChemistryTests = ChemistryTestsData & {
	setChemistryTests: (
		by: { [key in keyof ChemistryTestsData]: string }
	) => void;
};

export const useChemistryTests = create<ChemistryTests>((set) => ({
	...initialChemistryTests,
	setChemistryTests: (data: { [key in keyof ChemistryTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
