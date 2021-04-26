import create from "zustand";

//other stymtoms store

type Others = {
	others?: string;
	updateOthers: (by: { others: string }) => void;
};
export const useOthers = create<Others>((set) => ({
	others: "",
	updateOthers: (data: { others: string }) =>
		set((state) => ({ ...state, ...data })),
}));
