import create from "zustand";

//nutritional history store
export const initialNutritionalHistroy = {
	breastfed: "",
	wasBreastFeedingExclusive: "",
	breastFeedingStartTime: "",
	breastFeedingStartTimeDays: "",
	breastFeedingStartTimeMonths: "",
	vitaminASupplements: "",
};

type NutritionalHistroyData = {
	breastfed?: string;
	wasBreastFeedingExclusive?: string;
	breastFeedingStartTime?: string;
	breastFeedingStartTimeDays?: string;
	breastFeedingStartTimeMonths?: string;
	vitaminASupplements?: string;
};

type NutritionalHistroy = NutritionalHistroyData & {
	setNutritionalHistory: (
		by: { [key in keyof NutritionalHistroyData]: string }
	) => void;
};

export const useNutritionalHistory = create<NutritionalHistroy>((set) => ({
	...initialNutritionalHistroy,

	setNutritionalHistory: (data: NutritionalHistroyData) =>
		set((state) => ({ ...state, ...data })),
}));
