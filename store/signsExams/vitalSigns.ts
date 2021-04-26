import create from "zustand";

//vital signs store
export const initialVitalSigns = {
	temp: "",
	respRate: "",
	hr: "",
	o2Sat: "",
	bp: "",
	weight: "",
	height: "",
};

type VitalSignsData = {
	temp?: string;
	respRate?: string;
	hr?: string;
	o2Sat?: string;
	bp?: string;
	weight?: string;
	height?: string;
};

type VitalSigns = VitalSignsData & {
	updateVitalSigns: (by: { [key in keyof VitalSignsData]: string }) => void;
};

export const useVitalSigns = create<VitalSigns>((set) => ({
	...initialVitalSigns,
	updateVitalSigns: (data: { [key in keyof VitalSignsData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
