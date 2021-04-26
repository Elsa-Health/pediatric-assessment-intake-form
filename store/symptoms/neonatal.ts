import create from "zustand";

// neonatal symptoms store
type Neonatal = {
	inabilityToBreastFeed?: string;
	updateNeonatal: (by: { inabilityToBreastFeed: string }) => void;
};
export const useNeonatal = create<Neonatal>((set) => ({
	inabilityToBreastFeed: "",

	updateNeonatal: (data: { inabilityToBreastFeed: string }) =>
		set((state) => ({ ...state, ...data })),
}));
