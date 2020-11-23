import create from "zustand";

export const useDifferentials = create((set) => ({
  differentialOne: "",
  differentialTwo: "",
  differentialThree: "",
  //thos is to update all data state
  setDifferentials: (data) => set((state) => ({ ...state, ...data })),
}));
