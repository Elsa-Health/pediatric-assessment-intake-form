import create from "zustand";

type ChiefComplains = {
	complains?: string;
	setChiefComplains: (by: { complains: string }) => void;
};
export const useChiefComplains = create<ChiefComplains>((set) => ({
	complains: "",

	setChiefComplains: (data: { complains: string }) =>
		set((state) => ({ ...state, ...data })),
}));
