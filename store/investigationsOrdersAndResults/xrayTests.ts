import create from "zustand";

//  x-ray tests store
export const initialXRayTests = {
	cxr: "",
	cxrValue: "",
	other: "",
	otherValue: "",
};

type XRayTestsData = {
	cxr?: string;
	cxrValue?: string;
	other?: string;
	otherValue?: string;
};

type XRayTests = XRayTestsData & {
	updateXRayTests: (by: { [key in keyof XRayTestsData]: string }) => void;
};

export const useXRayTests = create<XRayTests>((set) => ({
	...initialXRayTests,
	updateXRayTests: (data: { [key in keyof XRayTestsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
