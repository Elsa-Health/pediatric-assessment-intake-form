import create from "zustand";

type ChiefComplains = {
	complains?: string;
	updateChiefComplains: (by: { complains: string }) => void;
};
export const useChiefComplains = create<ChiefComplains>((set) => ({
	complains: "",

	updateChiefComplains: (data: { complains: string }) =>
		set((state) => ({ ...state, ...data })),
}));
