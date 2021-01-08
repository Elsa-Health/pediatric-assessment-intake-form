import create from "zustand";

export const initialDifferentials = {
	differentialOne: "",
	differentialTwo: "",
	differentialThree: "",
};

type DifferentialsData = {
	differentialOne?: string;
	differentialTwo?: string;
	differentialThree?: string;
};

type Differentials = DifferentialsData & {
	setDifferentials: (
		by: { [key in keyof DifferentialsData]: string }
	) => void;
};

export const useDifferentials = create<Differentials>((set) => ({
	...initialDifferentials,
	//thos is to update all data state
	setDifferentials: (data) => set((state) => ({ ...state, ...data })),
}));
