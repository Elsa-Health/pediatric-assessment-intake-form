import create from "zustand";

// tb tests stores
export const initialTbTests = {
	microAAFBs: "",
	microAAFBsValue: "",
	mantoux: "",
	mantouxValue: "",
	xpertMTBRIF: "",
	xpertMTBRIFValue: "",
	mycoTBCulture: "",
	mycoTBCultureValue: "",
};

type TBTestsData = {
	microAAFBs?: string;
	microAAFBsValue?: string;
	mantoux?: string;
	mantouxValue?: string;
	xpertMTBRIF?: string;
	xpertMTBRIFValue?: string;
	mycoTBCulture?: string;
	mycoTBCultureValue?: string;
};

type TBTests = TBTestsData & {
	setTBTests: (by: { [key in keyof TBTestsData]: string }) => void;
};

export const useTBTests = create<TBTests>((set) => ({
	...initialTbTests,
	setTBTests: (data: { [key in keyof TBTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
