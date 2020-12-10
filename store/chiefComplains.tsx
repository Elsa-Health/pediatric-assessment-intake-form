import create from "zustand";

export const useChiefComplains = create((set) => ({
  complains: "",
  //thos is to update all data state
  setChiefComplains: (data) => set((state) => ({ ...state, ...data })),
}));
