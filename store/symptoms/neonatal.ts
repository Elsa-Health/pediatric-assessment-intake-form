import create from "zustand";

// neonatal symptoms store
type Neonatal = {
	inabilityToBreastFeed?: string;
	setNeonatal: (by: { inabilityToBreastFeed: string }) => void;
};
export const useNeonatal = create<Neonatal>((set) => ({
	inabilityToBreastFeed: "",

	setNeonatal: (data: { inabilityToBreastFeed: string }) =>
		set((state) => ({ ...state, ...data })),
}));
