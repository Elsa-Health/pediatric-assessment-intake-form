import create from "zustand";

// CNS Symptoms store
export const initilCNSSymtoms = {
	headache: "",
	headacheDays: "",

	coma: "",
	comaDays: "",

	hypothermia: "",
	hypothermiaDays: "",

	seizures: "",
	seizuresDays: "",

	neckPain: "",
	neckPainDays: "",

	highPitchedCrying: "",
	highPitchedCryingDays: "",
};

type CNSData = {
	headache?: string;
	headacheDays?: string;
	coma?: string;
	comaDays?: string;
	hypothermia?: string;
	hypothermiaDays?: string;

	seizures?: string;
	seizuresDays?: string;

	neckPain?: string;
	neckPainDays?: string;

	highPitchedCrying?: string;
	highPitchedCryingDays?: string;
};

type CNS = CNSData & {
	setCNS: (by: { [key in keyof CNSData]: string }) => void;
};

export const useCNS = create<CNS>((set) => ({
	...initilCNSSymtoms,
	setCNS: (data: { [key in keyof CNSData]: string }) =>
		set((state) => ({ ...state, ...data })),
}));
