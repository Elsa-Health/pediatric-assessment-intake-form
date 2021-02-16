import create from "zustand";

//other stymtoms store

type Others = {
	others?: string;
	setOthers: (by: { others: string }) => void;
};
export const useOthers = create<Others>((set) => ({
	others: "",
	setOthers: (data: { others: string }) =>
		set((state) => ({ ...state, ...data })),
}));
