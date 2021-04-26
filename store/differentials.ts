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
	updateDifferentials: (
		by: { [key in keyof DifferentialsData]: string }
	) => void;
};

export const useDifferentials = create<Differentials>((set) => ({
	...initialDifferentials,
	//thos is to update all data state
	updateDifferentials: (data) => set((state) => ({ ...state, ...data })),
}));
